const express = require("express");
const router = express.Router();
const { AJOUTER_OUVRIER , UPDATE_OUVRIER ,  DELETE_OUVRIER , GET_OUVRIER ,  GET_ALL_OUVRIER } = require("../authcontrollers/ouvrier");
const { verifyToken } = require("../utils/verifyToken");

// ADD OUVRIER
router.post('/AJOUTER', AJOUTER_OUVRIER)

// UPDATE OUVRIER
router.put('/UPDATE/:id', UPDATE_OUVRIER)

// DELETE OUVRIER
router.delete('/DELETE/:id' , DELETE_OUVRIER)

// GET OUVRIER
router.get('/GET/:id', GET_OUVRIER)

// GET ALL OUVRIER
router.get('/GET_ALL/:PrimaryKey', GET_ALL_OUVRIER)


module.exports = router