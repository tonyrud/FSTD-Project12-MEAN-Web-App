const mongoose = require('mongoose')
const User = mongoose.model('User')
const promisify = require('es6-promisify')
const mail = require('../handlers/mail')
const crypto = require('crypto')
// const passport = require('passport')

exports.getUsers = async (req, res) => {
  const users = await User.find({})
  res.json({ users })
}

exports.login = async (req, res) => {
  const user = req.user
  res.json({ user })
}

exports.logout = async (req, res) => {
  req.logout()
  res.json({ msg: 'logged out' })
}

exports.validateRegister = (req, res, next) => {
  // user express validator methods
  req.sanitizeBody('firstName')
  req.checkBody('firstName', 'You must supply a name!').notEmpty()
  req.checkBody('email', 'That Email is not valid!').isEmail()
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  })
  req.checkBody('password', 'Password Cannot be Blank!').notEmpty()
  req.checkBody('confirmPassword', 'Confirmed Password cannot be blank!').notEmpty()
  req.checkBody('confirmPassword', 'Oops! Your passwords do not match').equals(req.body.password)

  const errors = req.validationErrors()
  if (errors) {
    // res.json({ errors })
    next(errors)
    // return // stop the fn from running
  }
  next() // there were no errors!
}

exports.register = async (req, res, next) => {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
  const register = promisify(User.register, User)
  await register(user, req.body.password)
  res.json({ user })
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
  // res.redirect('back')
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
