const mongoose  = require('mongoose')

var OUVRIERHISTORYSchema = new mongoose.Schema({
    PrimaryKey : String,
  msg : String,
  photo: String,
  Fonction: String,
  Nom : String,
  Prenom : String,
  Email: String,
  Genre: String,
  Identity: String,
  Num_CIN_Passeport : String,
  DateDelivrance : String,
  Date_Naissance : String,
  TypeContrat : String,
  DebutContrat : String,
  FinContrat : String,
  Diplome : String,
  Section: String,
  YearDiplome: String,
  University: String,
  Adresse: String,
  City : String,
  Zipcode: String,
  Number1: String,
  Number2: String,
  Login: String,
  Password: String,
  dayinsert: String,
  isAdmin: Boolean,
  Date: String,
  Status: String,

  Dateupdate: String,
  Action: String,
  PrimaryKeyOUVRIER : String
})

module.exports.OUVRIERHISTORY = mongoose.model('OUVRIERHISTORY' , OUVRIERHISTORYSchema)