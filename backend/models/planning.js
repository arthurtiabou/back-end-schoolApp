const mongoose = require("mongoose");

const planningSchema = mongoose.Schema(
    {
        semaine:{
            type:String,
        },
        jour:{
            type:String,
        },
        debut:{
            type:String,
        },
        enseignant:{
            type:String,
        },
        matiere:{
            type:String,
        },
        groupe:{
            type:String,
        },
        salle:{
            type:String,
        }
    }
);

module.exports = mongoose.model('planning', planningSchema);