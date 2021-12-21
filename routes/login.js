var express = require('express')
var router = express.Router()
const loginValidation = require('../middleware/userLogin')
const loginController = require('../controller/login')
router.get('/', loginController.loginGetreq)
router.post('/', loginValidation, loginController.loginPostreq)


module.exports = router
