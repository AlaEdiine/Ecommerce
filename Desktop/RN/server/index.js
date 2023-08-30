const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer');
const parser = require('body-parser')
const bcrypt = require('bcrypt')
const cookieParser = require("cookie-parser")// cookies
const jwt = require('jsonwebtoken')
require('./db')
const { user } = require('./mongoSchema')
var cors = require('cors')  // api json 
require('dotenv').config();
var app = express()
// read secret key



var allowedOrigins = ['http://someorigin.com',
                      'http://localhost:3001',
                      'http://localhost:1234',
                      'http://localhost:3000'];

app.use(cors({

  origin: function(origin, callback){
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },

  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],

  credentials: true,
}));



// pour toutes les cors
// app.use(cors())

app.use(cookieParser())
const port = 3001
// Define dossier public
//const publicDirectory = path.join(__dirname, './public')
//app.use(express.static(publicDirectory))
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())

// app.use(cors((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//   next();
// }));

 // Define routes
//  app.use('/' , require('./routes/pages'))
 app.use('/auth' , require('./routes/auth'))
 app.use('/api' , require('./routes/api'))
 app.use('/user' , require('./routes/user'))
 app.use('/utilisateurs' , require('./routes/utilisateurs'))
 app.use('/USER' , require('./routes/_user'))
 app.use('/OUVRIER' , require('./routes/ouvrier'))
 app.use('/PRODUIT' , require('./routes/produit'))
 app.use('/FOURNISSEUR' , require('./routes/fournisseur'))
 app.use('/UPLOAD-IMAGE' , require('./routes/upload-image'))
 app.use('/images' , express.static("uploads"))

 app.use((err,req,res,next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "something went wrong"
  return res.status(errorStatus).json({
    succes:false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
 })

 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})