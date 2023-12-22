const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ma_base_de_donnees');

        console.log("Connexion réussie avec la base de données");
    } catch (e) {
        console.error("Erreur de connexion à la base de données:", e.message);
        process.exit(1); // Quitter l'application en cas d'échec de la connexion
    }
};

module.exports = connectDB;
//cors, mongose, multer,nodemon,express,dotenv,body-parser