const express = require("express");
const router = express.Router();
require("dotenv").config();
const { createError } = require("../Service/Error");
const { Login } = require("../authcontrollers/auth");


router.post('/Login', Login)

module.exports = router;
