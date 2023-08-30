const mongoose    = require('mongoose')

var usersSchema = new mongoose.Schema({
  photo: String,
  recto: String,
  verso: String,
  Fonction: String,
  Nom : String,
  Prenom : String,
  Email: String,
  Identity : String,
  Num_CIN_Passeport : String,
  DateDelivrance : String,
  Date_Naissance : String,
  Adresse : String,
  Code_Postale : String,
  Num_Portable : String,
  Num_Portable_02 : String,
  Num_Fixe : String,
  TypeContrat: String,
  DebutContrat: String,
  FinContrat: String,
  Diplome: String,
  Section : String,
  YearDiplome: String,
  Genre: String,
  Login: String,
  Password: String,
  Date_insertion : String,
  Last_update: String,
})

module.exports.employee = mongoose.model('employee' , usersSchema)


var usersSchema = new mongoose.Schema({
  Qrcode : String,
  article : String,
  lot : String,
  dateInsertion : String,
  lastModification : String,
  stock : Number,
  nombreVente : Number,
  prixUnitaireAchat : Number,
  prixUnitaireVente : Number,
  promo : Number,
})

module.exports.article = mongoose.model('article' , usersSchema)