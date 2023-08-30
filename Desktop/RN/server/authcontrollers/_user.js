const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")// cookies
const { SendEmail } = require('../Email/nodemailer');
const { USER } = require("../Models/_user");
const { createError } = require("../Service/Error");
require("dotenv").config();

//TODO: AJOUTER USER
// module.exports.AJOUTER_USER = async (req, res , next) => {
//   try{
//     console.log(req.body)
//   const result = await USER.insertMany(req.body);
//   if (!result) return next(createError(401, 'Error Search'))
//   return res.status(200).send(result)
// }
//   catch (err){
//     return  next(err)
//   }
// }
module.exports.AJOUTER_USER = async (req, res , next) => {
  try{
    Data = req.body;
    const { Password, Email } = Data;
  
    // Hash Password
    const salt = await bcrypt.genSalt(10);
    HashPassword = await bcrypt.hash(Password, salt);
    const dataForm = { ...Data, Password: HashPassword , ConfirmPassword : HashPassword  };
  
    // Search User
    const result = await USER.findOne({ Email : Email });
  
    if (result) return next(createError(401, 'Email Exist'))
    // if (result) return res.status(202).send({ message: "Email exist" });
  
    // Save User into Database
    const document = await USER.insertMany(dataForm)
   const Id = document[0]._id
   const isAdmin = document[0].isAdmin
    // Send Email with Nodemailer
    // const entierAleatoire = (min, max) => {
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // };
    // let codeVerif = entierAleatoire(1111, 9999);
    // SendEmail(codeVerif);
  
    // Generate Token
    const token = jwt.sign( {id : Id , isAdmin : isAdmin }  , process.env.SECRET_KEY_JWT );

    return res.cookie('Token', token ,  {httpOnly : true , secure : true} ).status(200).json(Id);
  
  }catch (err){
   return next(err)
  }
  }


//TODO: UPDATE USER
module.exports.UPDATE_USER = async (req, res , next) => {
  try{
    console.log(req.params)
  const result = await USER.findByIdAndUpdate(req.params.id , {$set : req.body} , {new : true});
  if (!result) return next(createError(401, 'Error Search'))
  return res.status(200).send(result)
}
  catch (err){
    return  next(err)
  }
}

//TODO: UPDATE USER
module.exports.DELETE_USER = async (req, res , next) => {
    try{
      console.log(req.params)
    const result = await USER.findByIdAndDelete({ _id : req.params.id });
    if (!result) return next(createError(401, 'Error Search'))
    return res.status(200).send('Succes deleted ouvrier')
  }
    catch (err){
      return  next(err)
    }
  }


//TODO: GET USER
module.exports.GET_USER = async (req, res , next) => {
  console.log(req.infoUser)
  try{
      const result = await USER.findById({ _id : req.infoUser.id });
      console.log(result)
      if (!result) return next(createError(401, 'Error Search'))
      return res.status(200).send(result._id)
    } 
  catch (err){
    return  next(err)
  }
}

//TODO: GET USER BY ID
module.exports.GET_USER_BY_ID = async (req, res , next) => {
  console.log(req.infoUser)
  try{
      const result = await USER.findById({ _id : req.infoUser.id });
      console.log(result)
      if (!result) return next(createError(401, 'Error Search'))
      return res.status(200).send(result.Name)
    } 
  catch (err){
    return  next(err)
  }
}

//TODO: GET ALL USER
module.exports.GET_ALL_USER = async (req, res , next) => {
  try{
    console.log(req.params)
  const result = await USER.find();
  if (!result) return next(createError(401, 'Error Search'))
  return res.status(200).send(result)
}
  catch (err){
    return  next(err)
  }
}
//TODO: GET ALL USER
module.exports.TEST = async (req, res , next) => {
  try{
    const token = 'fgRYTYdfge-rd`\[{#'
  return res.status(200).json(token)
}
  catch (err){
    return  next(err)
  }
}


