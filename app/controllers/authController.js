const passport = require('passport')
// const mongoose = require('mongoose')
// const User = mongoose.model('User')
// const crypto = require('crypto')
// const promisify = require('es6-promisify')
// const mail = require('../handlers/mail')

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'Failed Login!',
  successRedirect: '/',
  successFlash: 'You are now logged in!'
})
