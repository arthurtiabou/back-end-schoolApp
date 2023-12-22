const mongoose = require("mongoose");

const etudiantSchema = mongoose.Schema(
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
        groupe:{
            type:String,
        },
        passe:{
            type:String,
        },
    }
);

module.exports = mongoose.model('etudiant', etudiantSchema);