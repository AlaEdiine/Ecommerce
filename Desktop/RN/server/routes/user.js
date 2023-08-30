const express = require('express')
const jwt = require('jsonwebtoken')
const ControllersPage = require('../authcontrollers/UserMern')
const { authorization } = require('../authcontrollers/jwt')
//const { SendEmail } = require('../Email/nodemailer')
const router = express.Router()
let secret = "H254JY"

router.post('/delete', ControllersPage.delete)


module.exports = router