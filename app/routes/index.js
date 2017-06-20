const express = require('express')
const router = express.Router()
const passport = require('passport')
// const authController = require('./../controllers/authController')
const userController = require('./../controllers/userController')
const { catchAsyncErrors } = require('./../handlers/errorHandlers')

router.get('/', (req, res) => {
  res.send('API root. Nothing here')
})
// Users routes
router.get('/users', catchAsyncErrors(userController.getUsers))

// validate registration data
// register the user
// we need to log them in
router.post('/register',
  userController.validateRegister,
  userController.register
  // authController.login
)

router.post('/login',
  passport.authenticate('local'),
  userController.login
)
router.get('/logout', userController.logout)

module.exports = router
