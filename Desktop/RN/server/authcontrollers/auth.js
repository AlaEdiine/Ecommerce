const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")// cookies
const { SendEmail } = require('../Email/nodemailer');
const { USER } = require("../Models/_user");
const { createError } = require("../Service/Error");
require("dotenv").config();
        
// TODO: Login User
module.exports.Login = async (req, res , next) => {
  try{
    let { email, password } = req.body;
  
    // Cheking User
    const result = await USER.findOne({ Email : email});
    if (!result) return  next(createError(401, "Email Is Not Exist"))
  
    // Bcrypt && Compare password
    const Result_Password = result.Password;
    const validPassword = await bcrypt.compare(password, Result_Password);
  
    // isTrue : Generate token
    if (validPassword) {
      const token = jwt.sign({ id: result._id , isAdmin: result.isAdmin }, process.env.SECRET_KEY_JWT, { expiresIn: "1H"});
      console.log(token)
      return res.cookie('Token', token ,  {httpOnly : true , secure : true} ).status(200).json(result._id);;
    }
  
    // isFalse
    return  next(createError(404, "Wrong Email or Password"))

  }catch (err){
         return next(err)
        }
      };
// module.exports.refreshToken = (req , res) =>{
//     console.log(req.body)
//     let Identifiant = req.body.id
//     console.log('refresh ' +Identifiant)
//     const token = jwt.sign({ id }, process.env.SECRET_KEY_JWT, { expiresIn: "10s"});
//     return res.status(200).send({ token: token });
//     }
