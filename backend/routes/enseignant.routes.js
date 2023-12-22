const express = require('express');
const {  getEnseignants, saveEnseignant, editEnseignant, deleteEnseignant, getEnseignant } = require('../controllers/enseignant.controller');
const router = express()

router.get('/', getEnseignants);

router.get('/enseignant/:id', getEnseignant);

router.post("/post/",saveEnseignant);

router.put('/put/:id',editEnseignant);

router.delete("/:id",deleteEnseignant);

module.exports = router;