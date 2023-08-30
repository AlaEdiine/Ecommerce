const mongoose  = require('mongoose')

var PRODUITSchema = new mongoose.Schema({
  PrimaryKey : String,
  photo1 : String,
  photo2 : String,
  photo3 : String,
  label : String,
  Category : String,
  Supplier : String,
  QrCode: String,
  Lot: String,
  ExpirationDate: String,
  PurchasePrice: Number,
  ProfitMargin: Number,
  SellingPrice: String,
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

})

module.exports.PRODUIT = mongoose.model('PRODUIT' , PRODUITSchema)