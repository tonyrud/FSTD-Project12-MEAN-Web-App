const mongoose = require('mongoose')
const User = mongoose.model('User')
const promisify = require('es6-promisify')

exports.getUsers = async (req, res) => {
  const users = await User.find({})
  res.json({ users })
}

exports.login = async (req, res) => {
  const users = await User.find({})
  res.json({ users })
}

exports.validateRegister = (req, res, next) => {
  // user express validator methods
  req.sanitizeBody('name')
  req.checkBody('name', 'You must supply a name!').notEmpty()
  req.checkBody('email', 'That Email is not valid!').isEmail()
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  })
  req.checkBody('password', 'Password Cannot be Blank!').notEmpty()
  req.checkBody('password-confirm', 'Confirmed Password cannot be blank!').notEmpty()
  req.checkBody('password-confirm', 'Oops! Your passwords do not match').equals(req.body.password)

  const errors = req.validationErrors()
  if (errors) {
    req.flash('error', errors.map(err => err.msg))
    res.render('register', { title: 'Register', body: req.body, flashes: req.flash() })
    return // stop the fn from running
  }
  next() // there were no errors!
}
