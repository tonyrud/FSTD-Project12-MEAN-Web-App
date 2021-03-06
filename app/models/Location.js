const mongoose = require('mongoose')
const Schema = mongoose.Schema
const md5 = require('md5')
const validator = require('validator')
const mongodbErrorHandler = require('mongoose-mongodb-errors')

const locationSchema = new Schema({
  city: {
    type: String,
    trim: true
  },
  state: {
    type: String,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  activities: [
    {
      name: {
        type: String,
        trim: true
      },
      url: {
        type: String,
        trim: true
      },
      description: {
        type: String,
        trim: true
      }
    }
  ],
  lat: { type: Number },
  lon: { type: Number },
  unique_id: { type: Number, unique: true }
})

module.exports = mongoose.model('Location', locationSchema)
