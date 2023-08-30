const mongoose  = require('mongoose')

var FOURNISSEURSchema = new mongoose.Schema({
  PrimaryKey : String,
  photo: String,
  label: String,
  Category: String,
  Email: String,
  MF: String,
  Adress : String,
  City : String,
  Zipcode : String,
  Number1 : String,
  Number2 : String,
  Fixe : String,
  Fax : String,
  Date: String,
  Status: String
})

module.exports.FOURNISSEUR = mongoose.model('FOURNISSEUR' , FOURNISSEURSchema)