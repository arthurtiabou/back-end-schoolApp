const express = require('express');
const { getAbscences, saveAbscence, editAbscence, deleteAbscence, getAbscenceByEtudiant } = require('../controllers/abscence.controller');
const router = express()

router.get('/', getAbscences);

router.get('/etudiant', getAbscenceByEtudiant);

router.post("/post/",saveAbscence);

router.put('/put/:id',editAbscence);

router.delete("/:id",deleteAbscence);

module.exports = router;