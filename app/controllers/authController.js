const passport = require('passport')
const mongoose = require('mongoose')
const BasicStrategy = require('passport-http').BasicStrategy
const User = mongoose.model('User')

passport.use(new BasicStrategy(
  { usernameField: 'email' },
  function (username, password, callback) {
    User.findOne({ email: username }, function (err, user) {
      if (err) { return callback(err) }
      // No user found with that username
      if (!user) { return callback(null, false) }
      password = '123'
      // Make sure the password is correct
      user.verifyPassword(password, function (err, isMatch) {
        console.log(isMatch)
        if (err) { return callback(err) }

        // Password did not match
        if (!isMatch) { return callback(null, false) }

        // Success
        return callback(null, user)
      })
    })
  }
))

exports.isAuthenticated = passport.authenticate('basic', { session: false })
