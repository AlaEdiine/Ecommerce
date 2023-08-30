const express = require("express");
const multer = require('multer');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const { employee } = require("../mongoSchema");
const {utilisateur} = require ("../Models/_user");
const { SendEmail } = require("../Email/nodemailer");
const router = express.Router();
require("dotenv").config();
const { createError } = require("../Service/Error");
const { Login } = require("../authcontrollers/auth");
const { OUVRIER } = require("../Models/ouvrier");




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// TODO:  Add User
router.post("/addUser",  async (req, res) => {

  Data = req.body.DATA;
  ID = req.body.ID;

  async function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let LoginPassword = await entierAleatoire(11111, 99999);

  const Day = new Date();
  console.log(Day.toUTCString())

  const obj = {
    Login : LoginPassword,
    Password : LoginPassword,
    Date_insertion : Day,
    Last_update : " "
  }

    // Load the document
    const doc = await OUVRIER.findOne({ _id: ID });

    // Update the document using
    await doc.updateOne(Data);
    await doc.updateOne(obj);

  // Serach Document and Send to Front-End
    const document = await employee.findOne({ _id: ID });
   return res.status(200).send({ message : document });
  
});


// TODO: LOGIN EMAIL RECUP HOOK
router.post("/EmailRecup", async (req, res) => {
  let emailRecup = req.body.emailRecup;
  async function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let nouveauPassword = await entierAleatoire(11111111, 99999999);
  console.log(nouveauPassword);

  await user.findOne({ email: emailRecup }).then(async (result) => {
    if (result) {
      SendEmail(nouveauPassword);

      await user.updateMany(
        { email: emailRecup },
        { $set: { password: nouveauPassword } }
      );
    } else {
      return res.status(200).json({ result: "Email existe pas" });
    }
  });
});

// // TODO: AUTHORIZATION
// router.get("/token", (req, res , next)  => {
//   let token = req.headers["x-access_token"];
//   try {
//     if ((token === "undefined") || (!token)){
//       return next(createError(401, 'Unauthorized'))
//     }
//     if(token){
//       jwt.verify(token, process.env.SECRET_KEY_JWT , (err,user)=>{
//         if (err) return next(createError(403, 'Token is not valid !'))
//         return res.status(200).json({user});
//     })
//   }
// } catch (err) {
//     return next(err)
//   }
// });
// TODO: AUTHORIZATION BEARER
// router.get("/tokenBearer", (req, res , next)  => {
//   console.log(req.cookies)
//   let BH = req.headers["authorization"]
//   if(!BH){
//     return next(createError(401, 'You are not authenticated !'))
// }
//   try {
//   typeof NH == 'undefined'
//     const bearer = BH.split(' ')
//     const token = bearer[1]
//     req.token = token
//     console.log(token)
//     if ((token === "undefined") || (!token)){
//       return next(createError(401, 'Unauthorized'))
//       }
//       if(token){
//         jwt.verify(token, process.env.SECRET_KEY_JWT , (err,user)=>{
//           if (err) return next(createError(403, 'Token is not valid !'))
//           return res.status(200).json({user});
//       })
//     }
 
//   }
//   catch (err) {
//     return next(err)
//   }
// })

router.post('/Login', Login)

module.exports = router;
