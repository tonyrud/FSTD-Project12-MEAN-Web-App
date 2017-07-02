const mongoose = require('mongoose')
const User = mongoose.model('User')
const promisify = require('es6-promisify')
const mail = require('../handlers/mail')
const crypto = require('crypto')
// const passport = require('passport')

exports.getUsers = async (req, res, next) => {
  const users = await User.find({})
  if (!users) {
    console.log('---error getting users')
    let err = new Error('Email or password not provided.')
    err.status = 401
    next(err)
  }
  res.json({ users })
}

exports.login = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })
  if (user) {
    user.verifyPassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        res.json({ user })
      } else {
        // error checking password
        const err = new Error('Incorrect password')
        next(err)
      }
    })
  } else {
    const err = new Error('Incorrect email')
    next(err)
  }
}

exports.logout = async (req, res) => {
  req.logout()
  res.json({ msg: `You've logged out` })
}

exports.validateRegister = (req, res, next) => {
  // user express validator methods
  req.sanitizeBody('firstName')
  req.sanitizeBody('lastName')
  req.checkBody('firstName', 'You must supply a first name').notEmpty()
  req.checkBody('lastName', 'You must supply a last name').notEmpty()
  req.checkBody('email', 'Email is not valid').isEmail()
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  })
  req.checkBody('password', 'Password Cannot be Blank').notEmpty()
  req.checkBody('confirmPassword', 'Confirm Password cannot be blank').notEmpty()
  req.checkBody('confirmPassword', 'Oops! Your passwords do not match').equals(req.body.password)

  const errors = req.validationErrors()
  if (errors) {
    // return all error messages into new Error
    const msgs = errors.map(error => error.msg)
    const err = new Error(msgs)
    next(err)
  }
  next() // there were no errors!
}

exports.register = async (req, res, next) => {
  const user = new User(req.body)
  await user.save()
  res.json({ message: 'Success registering user', user })
}

exports.forgot = async (req, res) => {
  // see if a user with email
  const user = await User.findOne({ email: req.body.email })
  if (!user) {
    return res.json({msg: 'no user with that account'})
  }
  // set reset token
  user.resetPasswordToken = crypto.randomBytes(20).toString('hex')
  user.resetPasswordExpires = Date.now() + 3600000 // expires in 1hr
  await user.save()
  // send email with token
  const resetURL = `localhost:${process.env.CLIENT_PORT}/account/reset/${user.resetPasswordToken}`
  // await mail.send({
  //   user,
  //   subject: 'Password Reset',
  //   resetURL,
  //   filename: 'password-reset'
  // })

  res.json({msg: 'You have been emailed a password reset link.', url: resetURL})
}

exports.reset = async (req, res) => {
  const user = await User.findOne({
    resetPasswordToken: req.body.token,
    resetPasswordExpires: { $gt: Date.now() } // check if database value is greater than now
  })
  if (!user) {
    return res.json({msg: 'Password reset is invalid or has expired'})
  }
  // if user, show reset password form
  res.json('reset', { msg: 'Reset your password' })
}

exports.confirmedPasswords = (req, res, next) => {
  if (req.body.password === req.body['password-confirm']) {
    console.log('passwords match')
    next()
  }
}

exports.update = async (req, res, next) => {
  const user = await User.findOne({
    resetPasswordToken: req.params.token,
    resetPasswordExpires: { $gt: Date.now() }
  })
  if (!user) {
    return res.json({msg: 'Password reset is invalid or has expired'})
  }

  const setPassword = promisify(user.setPassword, user)
  await setPassword(req.body.password)
  // remove fields from mongodb
  user.resetPasswordToken = undefined
  user.resetPasswordExpires = undefined
  const updatedUser = await user.save()
  res.json({user: updatedUser})
}

exports.addLocationToUser = async (req, res, next) => {
  // loop users saved locations, map to string for operator checking
  const locations = req.user.locations.map(obj => obj.toString())
  // check if location is in user array
  const operator = locations.includes(req.params.locationId) ? '$pull' : '$addToSet'
  // update user locations based on operator needed
  const user = await User.findByIdAndUpdate(req.user._id,
    { [operator]: { locations: req.params.locationId } },
    { new: true })
  res.json({ message: 'Success saving location to user', user })
}
