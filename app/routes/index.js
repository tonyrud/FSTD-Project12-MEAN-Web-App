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

router.post('/register',
// validate registration data
  userController.validateRegister,
// register the user
  userController.register
)

router.post('/login',
  passport.authenticate('local'),
  userController.login
)
router.post('/forgot', catchAsyncErrors(userController.forgot))
router.post('/resetPassword/:token', userController.confirmedPasswords, catchAsyncErrors(userController.forgot))
router.get('/logout', userController.logout)

module.exports = router
