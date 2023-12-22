
const express = require('express');
const connectDB = require('./config/db');
const app = express()
const cors = require('cors');
const port = 3001

// connexion à la DB
connectDB();

//midleware qui permet de traiter les donnes de la resquest
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())

app.use('/etudiant', require('./routes/etudiant.routes'));
app.use('/enseignant', require('./routes/enseignant.routes'));
app.use('/admin', require('./routes/admin.routes'));
app.use('/planning', require('./routes/planning.routes'));
app.use('/abscence', require('./routes/abscence.routes'));



app.listen(port, () => {
  console.log(`le serveur a demarer au  port ${port}`)
})
