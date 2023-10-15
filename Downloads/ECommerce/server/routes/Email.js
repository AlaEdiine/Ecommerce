const express = require("express");
const nodemailer = require("nodemailer")
const router = express.Router();
require("dotenv").config();
const { createError } = require("../Service/Error");
const { Email } = require("../authcontrollers/email");


router.post('/msg', Email)

module.exports = router;
