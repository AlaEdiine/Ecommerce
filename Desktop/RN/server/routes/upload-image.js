const express = require("express");
const multer = require('multer');
const { FOURNISSEUR } = require("../Models/fournisseur");
const { OUVRIER } = require("../Models/ouvrier");
const { PRODUIT } = require("../Models/produit");
const router = express.Router();
require("dotenv").config();


// TODO: Add images into DataBase
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  const upload = multer({ storage: storage });

    router.post('/UPLOAD/:id', upload.array('image' , 1), async (req, res) => {
  
    // récupuration request files
    const Obj = req.files
  
    // Creer un objet data
    const data = {
      photo: Obj[0].filename
    }
  
      // Save images into Database
      await OUVRIER.findByIdAndUpdate(req.params.id , {$set : data} , {new : true})
        return res.status(200).send("docs");
      });

      router.post('/UPLOADIMGSUPPLIER/:id', upload.array('image' , 1), async (req, res) => {
  
        // récupuration request files
        const Obj = req.files
      
        // Creer un objet data
        const data = {
          photo: Obj[0].filename
        }
      
          // Save images into Database
          await FOURNISSEUR.findByIdAndUpdate(req.params.id , {$set : data} , {new : true})
            return res.status(200).send("docs");
          });

          router.post('/UPLOADIMGPRODUCT/:id', upload.array('image' , 3), async (req, res) => {
  
            // récupuration request files
            const Obj = req.files
          
            // Creer un objet data
            const data = {
              photo1: Obj[0].filename,
              photo2: Obj[1].filename,
              photo3: Obj[2].filename
            }
          
              // Save images into Database
              await PRODUIT.findByIdAndUpdate(req.params.id , {$set : data} , {new : true})
                return res.status(200).send("docs");
              });
    

  module.exports = router