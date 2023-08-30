const { PRODUIT } = require("../Models/produit");
const { PRODUITHISTORY } = require("../Models/produitHistory");
const { createError } = require("../Service/Error");

//TODO: AJOUTER PRODUIT
module.exports.AJOUTER_PRODUIT = async (req, res , next) => {
  try{
    QrcodeForSearch = req.body.forminput.QrCode
    PrimaryKeyForSearch = req.body.forminput.PrimaryKey
    console.log(req.body) 
    const find = await PRODUIT.findOne({PrimaryKey : PrimaryKeyForSearch , QrCode : QrcodeForSearch});
    if (find) return next(createError(401, 'This Product is Exist'))
  
    const Day = new Date();

    const obj = {
      Status : "Out of Stock",
      Stock : 0,
      Date : Day.toUTCString()
    }
    const TTObj = Object.assign(obj , req.body.forminput)
     const result = await PRODUIT.insertMany(TTObj , async (err,docs)=>{
      if (err) throw err
      const dataID = docs[0]._id
      const his = {
        Status : "Out of Stock",
        Stock : 0,
        Date : Day.toUTCString(),
        Action : "This product has been added with the following data" ,
        PrimaryKeyProduct : dataID
      }
      const TTHistoryObj = Object.assign(his , req.body.forminput)
  
      const ADDHISTORY = await PRODUITHISTORY.insertMany(TTHistoryObj);
  
      return res.status(200).send(dataID)
         });
  }
    catch (err){
      return  next(err)
    }
  }

//TODO: UPDATE PRODUIT
module.exports.UPDATE_PRODUIT = async (req, res , next) => {
  try{
    console.log(req.params)
  const result = await PRODUIT.findByIdAndUpdate(req.params.id , {$set : req.body} , {new : true});
  if (!result) return next(createError(401, 'Error Search'))
  return res.status(200).send(result)
}
  catch (err){
    return  next(err)
  }
}

//TODO: UPDATE PRODUIT
module.exports.DELETE_PRODUIT = async (req, res , next) => {
    try{
      console.log(req.params)
    const result = await PRODUIT.findByIdAndDelete({ _id : req.params.id });
    if (!result) return next(createError(401, 'Error Search'))
    return res.status(200).send('Succes deleted ouvrier')
  }
    catch (err){
      return  next(err)
    }
  }
  
//TODO: GET PRODUIT
module.exports.GET_PRODUIT = async (req, res , next) => {
    try{
      console.log(req.params)
    const result = await PRODUIT.findOne({ _id : req.params.id });
    const history = await PRODUITHISTORY.find({ PrimaryKeyProduct : req.params.id });
    if (!result) return next(createError(401, 'Error Search'))
    return res.status(200).send({result,history})
  }
    catch (err){
      return  next(err)
    }
}
  
  
//TODO: GET ALL PRODUIT
module.exports.GET_ALL_PRODUIT = async (req, res , next) => {
    try{
    const result = await PRODUIT.find({PrimaryKey : req.params.PrimaryKey});
    if (!result) return next(createError(401, 'Error Search'))
    return res.status(200).send(result)
  }
    catch (err){
      return  next(err)
    }
}
  