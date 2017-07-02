const express = require('express')
const router = express.Router()
const passport = require('passport')
const authController = require('./../controllers/authController')
const userController = require('./../controllers/userController')
const locationController = require('./../controllers/locationController')
const { catchAsyncErrors } = require('./../handlers/errorHandlers')

router.get('/', (req, res, next) => {
  const err = new Error('empty api route')
  // err.status = 401
  next(err)
})
// Users routes
router.get('/users',
  authController.isAuthenticated,
  catchAsyncErrors(userController.getUsers)
)

router.post('/register',
// validate registration data
  userController.validateRegister,
// register the user
  userController.register
)

// login routes and methods, these will not user authController methods
router.post('/login', userController.login)
router.post('/forgot', catchAsyncErrors(userController.forgot))
router.post('/resetPassword/:token',
  userController.confirmedPasswords,
  catchAsyncErrors(userController.forgot)
)
router.get('/logout', userController.logout)

// Locations routes
router.post('/locations/',
  authController.isAuthenticated,
  catchAsyncErrors(locationController.saveLocation),
  catchAsyncErrors(userController.addLocationToUser)
)

module.exports = router
