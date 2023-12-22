const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
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
        passe:{
            type:String,
        },
    }
);

module.exports = mongoose.model('admin', adminSchema);