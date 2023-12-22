const mongoose = require("mongoose");

const enseignantSchema = mongoose.Schema(
    {
        nom:{
            type:String,
        },
        prenom:{
            type:String,
        },
        email:{
            type:String,
        },
        matiere:{
            type:String,
        },
        passe:{
            type:String,
        },
    }
);

module.exports = mongoose.model('enseignant', enseignantSchema);