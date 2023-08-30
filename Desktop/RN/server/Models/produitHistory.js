const mongoose  = require('mongoose')

var PRODUITHISTORYSchema = new mongoose.Schema({
  PrimaryKey : String,
  photo : String,
  label : String,
  Category : String,
  Supplier : String,
  QrCode: String,
  Lot: String,
  ExpirationDate: String,
  PurchasePrice: Number,
  ProfitMargin: Number,
  SellingPrice: Number,
  MinQTY1: Number,
  MaxQTY1: Number,
  Price1: Number,
  MinQTY2: Number,
  MaxQTY2: Number,
  Price2: Number,
  MinQTY3: Number,
  MaxQTY3: Number,
  Price3: Number,
  WeightType: String,
  Weight: Number,
  Width: Number,
  Height : Number,
  Length : Number,
  Color : String,
  Status : String,
  Stock : Number,

  
  Date: String,
  Action: String,
  PrimaryKeyProduct : String

})

module.exports.PRODUITHISTORY = mongoose.model('PRODUITHISTORY' , PRODUITHISTORYSchema)