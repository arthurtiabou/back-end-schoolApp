
const express = require('express');
const { saveEtudiant, getEtudiants, editEtudiant, deleteEtudiant, getEtudiant } = require('../controllers/etudiant.controller');
const router = express()

router.get('/', getEtudiants);

router.get('/etudiant/:id', getEtudiant);

router.post("/post/",saveEtudiant);

router.put('/put/:id',editEtudiant);

router.delete('/:id',deleteEtudiant);

module.exports = router;
