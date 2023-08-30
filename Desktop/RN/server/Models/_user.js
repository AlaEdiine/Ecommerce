const mongoose = require("mongoose");

const USERSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },

    Password: {
        type: String,
        required: true
    },

    ConfirmPassword: {
        type: String,
        required: true
    },

    MF: {
        type: String,
        required: false
    },

    isAdmin: {
         type: Boolean,
         default : true
    },
    
    PrimaryKey :
    {
        type: String,
    },
    Photo :
    {
        type: String,
    }
     

});

module.exports.USER = mongoose.model('USER' , USERSchema)