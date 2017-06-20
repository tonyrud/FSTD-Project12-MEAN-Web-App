const mongoose = require('mongoose')
const User = mongoose.model('User')
const promisify = require('es6-promisify')
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
