const { FOURNISSEUR } = require("../Models/fournisseur");
const { FOURNISSEURHISTORY } = require("../Models/fournisseurHistory");
const { createError } = require("../Service/Error");

//TODO: AJOUTER FOURNISSEUR
module.exports.AJOUTER_FOURNISSEUR = async (req, res , next) => {
  try{
    EmailForSearch = req.body.forminput.Email
    PrimaryKeyForSearch = req.body.forminput.PrimaryKey
    console.log(req.body) 
    const find = await FOURNISSEUR.findOne({PrimaryKey : PrimaryKeyForSearch , Email : EmailForSearch});
    if (find) return next(createError(401, 'This Supplier is Exist'))
  
    const Day = new Date();

    const obj = {
      Status : "Active",
      Date : Day.toUTCString()
    }
    const TTObj = Object.assign(obj , req.body.forminput)
     const result = await FOURNISSEUR.insertMany(TTObj , async (err,docs)=>{
      if (err) throw err
      const dataID = docs[0]._id
      const his = {
        Status : "Active",
        Date : Day.toUTCString(),
        Action : "This supplier has been added with the following data" ,
        PrimaryKeySupplier : dataID
      }
      const TTHistoryObj = Object.assign(his , req.body.forminput)
  
      const ADDHISTORY = await FOURNISSEURHISTORY.insertMany(TTHistoryObj);
  
      return res.status(200).send(dataID)
         });
  }
    catch (err){
      return  next(err)
    }
  }
  
//TODO: UPDATE FOURNISSEUR
module.exports.UPDATE_FOURNISSEUR = async (req, res , next) => {
  const obje = req.body
  EmailForSearch = req.body.Email
  PrimaryKeyForSearch = req.body.PrimaryKey
  try{    
    const find = await FOURNISSEUR.findOne({PrimaryKey : PrimaryKeyForSearch , Email : EmailForSearch});
    if (find) return next(createError(401, 'This Email is Exist'))
  console.log(obje);
    console.log(req.params)
  const result = await FOURNISSEUR.findByIdAndUpdate(req.params.id , {$set : req.body} , {new : true});
  if (!result) return next(createError(401, 'Error Search'))
  const Day = new Date();
  const his = {
    Date : Day.toUTCString(),
    Action : "This supplier has been updated with the following data" ,
    PrimaryKeySupplier : req.params.id
  }
  const TTHistoryObj = Object.assign(his , obje)

  const ADDHISTORY = await FOURNISSEURHISTORY.insertMany(TTHistoryObj);
  return res.status(200).send(result)
}
  catch (err){
    return  next(err)
  }
}

//TODO: DELETE FOURNISSEUR
module.exports.DELETE_FOURNISSEUR = async (req, res , next) => {
    try{
      console.log(req.params)
    const result = await FOURNISSEUR.findByIdAndDelete({ _id : req.params.id });
    if (!result) return next(createError(401, 'Error Search'))
    return res.status(200).send('Succes deleted fournisseur')
  }
    catch (err){
      return  next(err)
    }
  }
  
//TODO: GET FOURNISSEUR
module.exports.GET_FOURNISSEUR = async (req, res , next) => {
    try{
      console.log(req.params)
      const result = await FOURNISSEUR.findOne({ _id : req.params.id });
      const history = await FOURNISSEURHISTORY.find({ PrimaryKeySupplier : req.params.id });
      if (!result) return next(createError(401, 'Error Search'))
      return res.status(200).send({result,history})
  }
    catch (err){
      return  next(err)
    }
}
  
  
//TODO: GET ALL FOURNISSEUR
module.exports.GET_ALL_FOURNISSEUR = async (req, res , next) => {
    try{
    const result = await FOURNISSEUR.find({PrimaryKey : req.params.PrimaryKey});
    if (!result) return next(createError(401, 'Error Search'))
    console.log(result);
    return res.status(200).send(result)
  }
    catch (err){
      return  next(err)
    }
}
  