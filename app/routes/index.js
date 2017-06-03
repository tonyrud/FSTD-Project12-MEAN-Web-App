const express = require('express')
const router = express.Router()
const userController = require('./../controllers/userController')
const { catchAsyncErrors } = require('./../handlers/errorHandlers')

// Users routes
router.get('/users', catchAsyncErrors(userController.getUsers))

module.exports = router
