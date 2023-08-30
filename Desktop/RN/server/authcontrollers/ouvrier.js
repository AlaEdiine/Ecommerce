const { OUVRIER } = require("../Models/ouvrier");
const { OUVRIERHISTORY } = require("../Models/ouvrierHistory");
const { createError } = require("../Service/Error");

//TODO: AJOUTER OUVRIER
module.exports.AJOUTER_OUVRIER = async (req, res , next) => {
  try{
    EmailForSearch = req.body.forminput.Email
    PrimaryKeyForSearch = req.body.forminput.PrimaryKey
  const find = await OUVRIER.findOne({PrimaryKey : PrimaryKeyForSearch , Email : EmailForSearch});
  if (find) return next(createError(401, 'This Email is Exist'))

  async function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let LoginPassword = await entierAleatoire(11111, 99999);

  const Day = new Date();

  const obj = {
    Login : LoginPassword,
    Password : LoginPassword,
    Status : "Active",
    isAdmin : false,
    Date : Day.toUTCString()
  }
  const TTObj = Object.assign(obj , req.body.forminput)
   const result = await OUVRIER.insertMany(TTObj , async (err,docs)=>{
    if (err) throw err
    const dataID = docs[0]._id
    const his = {
      Login : LoginPassword,
      Password : LoginPassword,
      Status : "Active",
      isAdmin : false,
      Date : Day.toUTCString(),
      Action : "This user addThis user has been added with the following data" ,
      PrimaryKeyOUVRIER : dataID
    }
    const TTHistoryObj = Object.assign(his , req.body.forminput)

    const ADDHISTORY = await OUVRIERHISTORY.insertMany(TTHistoryObj);

    return res.status(200).send(dataID)
       });
}
  catch (err){
    return  next(err)
  }
}

//TODO: UPDATE OUVRIER
module.exports.UPDATE_OUVRIER = async (req, res , next) => {
  const obje = req.body
  EmailForSearch = req.body.Email
  PrimaryKeyForSearch = req.body.PrimaryKey
  
  const find = await OUVRIER.findOne({PrimaryKey : PrimaryKeyForSearch , Email : EmailForSearch});
  if (find) return next(createError(401, 'This Email is Exist'))
console.log(obje);
  try{
    console.log(req.params.id)
  const result = await OUVRIER.findByIdAndUpdate(req.params.id , {$set : obje} , {new : true});
  if (!result) return next(createError(401, 'Error Search'))
  const Day = new Date();
  const his = {
    Date : Day.toUTCString(),
    Action : "This user has been updated with the following data" ,
    PrimaryKeyOUVRIER : req.params.id
  }
  const TTHistoryObj = Object.assign(his , obje)

  const ADDHISTORY = await OUVRIERHISTORY.insertMany(TTHistoryObj);
  return res.status(200).send(result)
}
  catch (err){
    return  next(err)
  }
}

//TODO: UPDATE OUVRIER
module.exports.DELETE_OUVRIER = async (req, res , next) => {
    try{
      console.log(req.params)
    const result = await OUVRIER.findByIdAndDelete({ _id : req.params.id });
    if (!result) return next(createError(401, 'Error Search'))
    return res.status(200).send('Succes deleted ouvrier')
  }
    catch (err){
      return  next(err)
    }
  }
  
//TODO: GET OUVRIER
module.exports.GET_OUVRIER = async (req, res , next) => {
    try{
      console.log(req.params)
    const result = await OUVRIER.findOne({ _id : req.params.id });
    const history = await OUVRIERHISTORY.find({ PrimaryKeyOUVRIER : req.params.id });
    if (!result) return next(createError(401, 'Error Search'))
    return res.status(200).send({result,history})
  }
    catch (err){
      return  next(err)
    }
}
  
  
//TODO: GET ALL OUVRIER
module.exports.GET_ALL_OUVRIER = async (req, res , next) => {
    try{
      console.log(req.params.PrimaryKey)
    const result = await OUVRIER.find({PrimaryKey : req.params.PrimaryKey});
    if (!result) return next(createError(401, 'Error Search'))
    console.log(result);
    return res.status(200).send(result)
  }
    catch (err){
      return  next(err)
    }
}
  