const express = require('express');
const { getPlannings, savePlanning, editPlanning, deletePlanning, getPlanningByGroupe, getPlanningByEnseignant } = require('../controllers/planning.controller');
const router = express()

router.get('/',getPlannings );

router.get('/groupe/',getPlanningByGroupe );

router.get('/enseignant/',getPlanningByEnseignant );

router.post("/post",savePlanning);

router.put('/put/:id',editPlanning);

router.delete("/:id",deletePlanning);

module.exports = router;