var express = require('express')
var router = express.Router()
const homeController = require('../controller/home')
router.get('/', homeController.homeGetreq)
router.post('/', homeController.homePostreq)

module.exports = router