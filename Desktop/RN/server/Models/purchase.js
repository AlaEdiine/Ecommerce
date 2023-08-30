const mongoose  = require('mongoose')

var PURCHASESchema = new mongoose.Schema({
  PrimaryKey : String,
  QrCode: String,
  Name : String,
  Lot: String,
  ExpirationDate: String,
  PriceHT : String,
  TVA : Boolean,
  PriceTTC : String,
  Modification : [],

})

module.exports.PURCHASE = mongoose.model('PURCHASE' , PURCHASESchema)