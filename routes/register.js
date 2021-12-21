var express = require('express')
var router = express.Router()
const registerController = require('../controller/register')
const registrasionValidation = require('../middleware/userRegister')
router.get('/', registerController.registerGetreq)
router.post('/', registrasionValidation, registerController.registerPostreq)
module.exports = router