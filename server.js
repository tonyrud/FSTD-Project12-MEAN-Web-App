const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')
const expressValidator = require('express-validator')
const routes = require('./app/routes/index')
const errorHandlers = require('./app/handlers/errorHandlers')
require('./app/handlers/passport')

// create Express app
const app = express()


// Allows CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  if (req.method === 'OPTIONS') {
    return res.status(200).json({})
  }
  next()
})

// set static path to angular app
app.use(express.static(path.join(__dirname, './dist')))

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Exposes a bunch of methods for validating data. Used in usersController.validateRegister
app.use(expressValidator())

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser())

/*********************
 -- passport.js setup --
*********************/

// Passport JS handles logins
app.use(passport.initialize())
app.use(passport.session())

/*********************
 -- routing setup --
*********************/

// Handle our api routes
app.use('/api', routes)

/*********************
 -- error handling setup --
*********************/

// If the above route didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound)

if (app.get('env') === 'development') {
  console.log('in development')
  // Use morgan for http request logging in dev mode
  app.use(morgan('dev'))
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors)
} else {
  console.log('in production')
  // use to bypass add hash to all routes in angular
  app.use((req, res) => res.sendFile(__dirname + './dist/index.html'));
  // production error handler
  app.use(errorHandlers.productionErrors)
}

// export app to then start the site in start.js
module.exports = app
