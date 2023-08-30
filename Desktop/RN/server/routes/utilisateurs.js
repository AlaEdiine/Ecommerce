const express = require('express')
const ControllersPage = require('../authcontrollers/UtilisateursMern')
//const { SendEmail } = require('../Email/nodemailer')
const router = express.Router()
let secret = "H254JY"

router.get('/FindUtilisateurs', ControllersPage.Find)


module.exports = router