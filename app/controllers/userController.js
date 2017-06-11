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
  req.sanitizeBody('name')
}