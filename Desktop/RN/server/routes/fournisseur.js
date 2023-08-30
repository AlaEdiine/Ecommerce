const express = require("express");
const router = express.Router();
const { AJOUTER_FOURNISSEUR , UPDATE_FOURNISSEUR ,  DELETE_FOURNISSEUR , GET_FOURNISSEUR ,  GET_ALL_FOURNISSEUR } = require("../authcontrollers/fournisseur");

// ADD FOURNISSEUR
router.post('/AJOUTER', AJOUTER_FOURNISSEUR)

// UPDATE FOURNISSEUR
router.put('/UPDATE/:id', UPDATE_FOURNISSEUR)

// DELETE FOURNISSEUR
router.delete('/DELETE/:id', DELETE_FOURNISSEUR)

// GET FOURNISSEUR
router.get('/GET/:id', GET_FOURNISSEUR)

// GET ALL FOURNISSEUR
router.get('/GET_ALL/:PrimaryKey', GET_ALL_FOURNISSEUR)


module.exports = router