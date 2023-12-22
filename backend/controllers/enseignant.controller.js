const EnseignantModel = require('../models/enseignant');


module.exports.getEnseignants = async (req, res) => {
    try {
        const enseignants = await EnseignantModel.find();
        res.status(200).json(enseignants)
    } catch (e) {
        console.log(e + " l'enseignant n'a pas été trouvé !")
    }

}

module.exports.editEnseignant = async (req, res) => {


    try {
        const enseignant = await EnseignantModel.findById(req.params.id)

        if (!enseignant) {
            res.status(400).json({ message: "Cette enseignant n'existe pas !" });
        }

        const updateEnseignant = await EnseignantModel.findByIdAndUpdate(enseignant,
            req.body, {
            new: true,
        });

        res.status(200).json(updateEnseignant);
    } catch (e) {
        console.log(e + " l'enseignant n'a pas été trouvé !")
    }


}


module.exports.deleteEnseignant = async (req, res) => {

    try {
        const enseignant = await EnseignantModel.findById(req.params.id);

        if (!enseignant) {
            res.status(400).json({ message: "Cette enseignant n'existe pas !" });
        }

        const result = await enseignant.deleteOne();
        res.status(200).json(result);
    } catch (e) {
        console.log(e + " l'enseignant n'a pas été trouvé !")
    }


}

module.exports.getEnseignant = async (req, res) => {

    if (!req.params.id) {
        return res.status(400).json({
            message: "L'ID de l'enseignant est requis."
        });
    }

    try {
        const enseignant = await EnseignantModel.findById(req.params.id);
        res.status(200).json(enseignant)
    } catch (e) {
        console.log(e + " l'enseignant n'a pas été trouvé !")
    }


}

module.exports.saveEnseignant = async (req, res) => {

    try {

        const enseignant = await EnseignantModel.create(
            {
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                matiere: req.body.matiere,
                passe: req.body.passe,
            }
        );
        res.status(200).json(enseignant);
    } catch (e) {
        console.log(e + " l'enseignant n'a pas été trouvé !")
    }


}