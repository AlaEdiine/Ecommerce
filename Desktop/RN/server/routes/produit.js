const express = require("express");
const router = express.Router();
const { AJOUTER_PRODUIT: AJOUTER_PRODUIT , UPDATE_PRODUIT ,  DELETE_PRODUIT , GET_PRODUIT ,  GET_ALL_PRODUIT } = require("../authcontrollers/produit");

// ADD PRODUIT
router.post('/AJOUTER', AJOUTER_PRODUIT)

// UPDATE PRODUIT
router.put('/UPDATE/:id', UPDATE_PRODUIT)

// DELETE PRODUIT
router.delete('/DELETE/:id', DELETE_PRODUIT)

// GET PRODUIT
router.get('/GET/:id', GET_PRODUIT)

// GET ALL PRODUIT
router.get('/GET_ALL/:PrimaryKey', GET_ALL_PRODUIT)


module.exports = router