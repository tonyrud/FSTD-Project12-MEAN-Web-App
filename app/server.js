const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const path = require('path')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')
const expressValidator = require('express-validator')
const routes = require('./routes/index')
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
  res.header('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept, Authorization')
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

/*********************
 -- passport.js setup --
*********************/

// Sessions store data on visitors from request to request
// This keeps users logged in
// app.use(session({
//   secret: process.env.SECRET,
//   key: process.env.KEY,
//   resave: false,
//   saveUninitialized: false,
//   store: new MongoStore({ mongooseConnection: mongoose.connection })
// }))

// Passport JS handles logins
app.use(passport.initialize())
app.use(passport.session())

// app.use((req, res, next) => {
//   req.login = promisify(req.login, req);
//   next();
// });

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
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors)
}

// production error handler
app.use(errorHandlers.productionErrors)

// export app to then start the site in start.js
module.exports = app
