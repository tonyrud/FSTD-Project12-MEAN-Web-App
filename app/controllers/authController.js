const passport = require('passport')
const mongoose = require('mongoose')
const BasicStrategy = require('passport-http').BasicStrategy
const User = mongoose.model('User')

passport.use(new BasicStrategy(
  { usernameField: 'email' },
  function (username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) { return done(err) }
      // No user found with that username
      if (!user) { return done(null, false) }

      // check user password to password from client
      if (user.password === password) {
        // Success
        return done(null, user)
      } else {
        return done(null, false)
      }
    })
  }
))

exports.isAuthenticated = passport.authenticate('basic', { session: false })
