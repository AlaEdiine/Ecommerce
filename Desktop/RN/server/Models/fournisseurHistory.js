const mongoose  = require('mongoose')

var FOURNISSEURHISTORYSchema = new mongoose.Schema({
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
  Status: String,

  Dateupdate: String,
  Action: String,
  PrimaryKeySupplier : String
})

module.exports.FOURNISSEURHISTORY = mongoose.model('FOURNISSEURHISTORY' , FOURNISSEURHISTORYSchema)