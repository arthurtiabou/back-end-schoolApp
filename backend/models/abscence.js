const mongoose = require("mongoose");

const abscenceSchema = mongoose.Schema(
    {
        nom:{
            type:String,
        },
        periode:{
            type:String,
        },
        date:{
            type:String,
        },
        groupe:{
            type:String,
        },
    }
);

module.exports = mongoose.model('abscence', abscenceSchema);