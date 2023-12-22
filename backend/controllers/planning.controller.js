const PlanningModel = require('../models/planning');


module.exports.getPlannings = async (req, res) => {
    try {
        const plannings = await PlanningModel.find();
        res.status(200).json(plannings)
    } catch (e) {
        console.log(e + " le planning n'a pas été récupéré ")
    }

}

module.exports.editPlanning = async (req, res) => {

    try {

        const planning = await PlanningModel.findById(req.params.id)

        if (!planning) {
            res.status(400).json({ message: "Cette planning n'existe pas !" });
        }

        const updatelanning = await PlanningModel.findByIdAndUpdate(planning,
            req.body, {
            new: true,
        });

        res.status(200).json(updateplanning);
    } catch (e) {
        console.log(e + " le planning n'a pas été récupéré ")
    }

}


module.exports.deletePlanning = async (req, res) => {

    try {

        const planning = await PlanningModel.findById(req.params.id);

        if (!planning) {
            res.status(400).json({ message: "Cette planning n'existe pas !" });
        }

        const result = await planning.deleteOne()
        res.status(200).json(result);
    } catch (e) {
        console.log(e + " le planning n'a pas été récupéré ")
    }

}

module.exports.savePlanning = async (req, res) => {

    try {

        const planning = await PlanningModel.create(
            {
                semaine: req.body.semaine,
                jour: req.body.jour,
                debut: req.body.debut,
                enseignant: req.body.enseignant,
                matiere: req.body.matiere,
                groupe: req.body.groupe,
                salle: req.body.salle
            }
        );
        res.status(200).json(planning);

    } catch (e) {
        console.log(e + " le planning n'a pas été récupéré ")
    }


}

module.exports.getPlanningByGroupe = async (req, res) => {

    try {
        const groupe = req.query.groupe;

        // Recherchez les étudiants
        const plannings = await PlanningModel.find({
            groupe: groupe
        });

        // Renvoyez les étudiants
        res.status(200).json(plannings);

    } catch (e) {
        console.log(e + " le planning n'a pas été récupéré ")
    }


};

module.exports.getPlanningByEnseignant = async (req, res) => {

    try {

        const enseignant = req.query.enseignant;

        // Recherchez les étudiants
        const plannings = await PlanningModel.find({
            enseignant: enseignant
        });

        // Renvoyez les étudiants
        res.status(200).json(plannings);
    } catch (e) {
        console.log(e + " le planning n'a pas été récupéré ")
    }


};