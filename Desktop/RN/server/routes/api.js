const express = require("express");
const multer = require('multer');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { user, employee } = require("../mongoSchema");
const { SendEmail } = require("../Email/nodemailer");
const router = express.Router();
require("dotenv").config();

// TODO: Liste Employee
router.get("/ListEmployee", async (req, res) => {
    const respo = await  employee.find({})
    console.log(respo)
        res.send(respo)
    // // Cheking User
    // const result = await employee.find();
    // console.log(result)
    // if (!result) return res.status(200).send({ message: "Liste vide" });  
    // // isFalse
    // return res.status(200).send({ message: result });
  });

  module.exports = router;