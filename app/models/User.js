const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const bcrypt = require('bcrypt')
const md5 = require('md5')
const validator = require('validator')
const mongodbErrorHandler = require('mongoose-mongodb-errors')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid email address'],
    required: 'Please supply an email address'
  },
  firstName: {
    type: String,
    required: 'Please supply a first name',
    trim: true
  },
  lastName: {
    type: String,
    required: 'Please supply a last name',
    trim: true
  },
  password: { type: String, required: 'Please supply a password' },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  locations: [
    { type: mongoose.Schema.ObjectId, ref: 'Location' }
  ]
})

// hash password before saving
userSchema.pre('save', function (next) {
  var user = this
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err)
    }
    user.password = hash
    next()
  })
})

userSchema.methods.verifyPassword = function (password, next) {
  // compare user password to client sent password
  bcrypt.compare(password, this.password, function (err, isMatch) {
    // isMatch equals true or false based on compare
    if (err) return next(err)
    next(null, isMatch)
  })
}

userSchema.virtual('gravatar').get(function () {
  const hash = md5(this.email)
  return `https://gravatar.com/avatar/${hash}?s=200`
})

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
userSchema.plugin(mongodbErrorHandler) // give user friendly error messages
module.exports = mongoose.model('User', userSchema)
