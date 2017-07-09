
/*
  - Check node versions, respond with message if not using a correct version for async/await
  - start database
  - import and mongoose models to make available to entire app
  - start server when all is good
*/ 

const mongoose = require('mongoose')

// Make sure node 7.6+ for async functions
const [major, minor] = process.versions.node.split('.').map(parseFloat)
if (major <= 7 && minor <= 5) {
  console.log(`🚫 You're on an older version(${process.versions.node}) of node that doesn't support async/await. Please go to nodejs.org and download a version higher than 7.6.`)
  process.exit()
} else if (major >= 8) {
  console.log(`🚫 Your version(${process.versions.node}) is too new and will cause issues with node-sass module and Webpack! Please use a version that is below 8`)
  process.exit()
}



// import environmental variables from variables.env file
require('dotenv').config({ path: __dirname + '/app/config/.env'})
// Connect to cloud Database and handle bad connections
mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🚫 → Database connection error: ${err.message}`)
})

// import mongoose models
require('./app/models/User')
require('./app/models/Location')



// Start api server
const app = require('./app/server.js')

app.use((req, res, next) => {
  console.log('cors function ran')
  // const origin = req.get('origin');
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  if (req.method === 'OPTIONS') {
    return res.status(200).json({})
  }
  next()
})

app.set('port', process.env.PORT || 4200)
const server = app.listen(app.get('port'), () => {
  console.log(`Express API running → PORT ${server.address().port}`)
})
