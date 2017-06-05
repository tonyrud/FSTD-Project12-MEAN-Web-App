const mongoose = require('mongoose')
import { Application } from "express";


// Make sure node 7.6+ for async functions
const [major, minor] = process.versions.node.split('.').map(parseFloat)
if (major <= 7 && minor <= 5) {
  console.log(`🚫 You're on an older version(${process.versions.node}) of node that doesn't support async/await. Please go to nodejs.org and download a version higher than 7.6.`)
  process.exit()
} else if (major >= 8) {
  console.log(`🚫 Your version(${process.versions.node}) is too new and will cause issues with node-sass module and Webpack! Please use a version that is below 8`)
}

// import environmental variables from variables.env file
require('dotenv').config({ path: __dirname + '/config/.env'})
// Connect to cloud Database and handle bad connections
mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🚫 → Database connection error: ${err.message}`)
})

// import models
require('./models/User')

// Start api server
const app: Application = require('./server.ts')
app.set('port', process.env.API_PORT || 4200)
const server = app.listen(app.get('port'), () => {
  console.log(`Express API running → PORT ${server.address().port}`)
})
