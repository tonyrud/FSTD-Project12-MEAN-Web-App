const mongoose = require('mongoose')

// Make sure node 7.6+ for async functions
const [major, minor] = process.versions.node.split('.').map(parseFloat)
if (major <= 7 && minor <= 5) {
  console.log('You\'re on an older version of node that doesn\'t support async/await. Please go to nodejs.org and download version 7.6 or greater.')
  process.exit()
}

// import environmental variables from variables.env file
require('dotenv').config({ path: './config/env/variables.env' })

// Connect to cloud Database and handle bad connections
mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🚫 → Database connection error: ${err.message}`)
})

// import models
require('./app/models/User')

// Start api server
const app = require('./app/server')
app.set('port', process.env.API_PORT || 7777)
const server = app.listen(app.get('port'), () => {
  console.log(`Express API running → PORT ${server.address().port}`)
  console.log(`Angular Server running → PORT ${process.env.CLIENT_PORT}`)
})
