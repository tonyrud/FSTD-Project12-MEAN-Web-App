const mongoose = require('mongoose')

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
