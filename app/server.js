const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const path = require('path')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')
const promisify = require('es6-promisify')
const expressValidator = require('express-validator')
const routes = require('./routes/index')
const helpers = require('./helpers')
const errorHandlers = require('./handlers/errorHandlers')
require('./handlers/passport')

// create Express app
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, './../dist')))

// Allows CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept')
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE')
    return res.status(200).json({})
  }
  next()
})

// Use morgan for http request logging in dev mode
app.use(morgan('dev'))

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Exposes a bunch of methods for validating data. Used in usersController.validateRegister
app.use(expressValidator())

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser())

// Sessions store data on visitors from request to request
// This keeps users logged in
app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

// Passport JS handles logins
app.use(passport.initialize())
app.use(passport.session())

// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.h = helpers
  // res.locals.user = req.user || null
  res.locals.currentPath = req.path
  next()
})

// promisify some callback based APIs
app.use((req, res, next) => {
  // req.login = promisify(req.login, req)
  next()
})

// After allllll that above middleware, we finally handle our own routes!
app.use('/api', routes)

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound)

// Template render error
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors)
}

// production error handler
app.use(errorHandlers.productionErrors)

// done! we export it so we can start the site in start.js
module.exports = app
