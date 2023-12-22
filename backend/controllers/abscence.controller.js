const AbscenceModel = require('../models/abscence');


module.exports.getAbscences = async (req, res) => {

    try {
        const abscences = await AbscenceModel.find();
        res.status(200).json(abscences)
    } catch (e) {
        console.log(e + " les abscences n'ont pas pu être récupéré !")
    }

}

module.exports.editAbscence = async (req, res) => {

    try {
        const abscence = await AbscenceModel.findById(req.params.id)

        if (!abscence) {
            res.status(400).json({ message: "Cette abscence n'existe pas !" });
        }

        const updateAbscence = await AbscenceModel.findByIdAndUpdate(abscence,
            req.body, {
            new: true,
        });

        res.status(200).json(updateAbscence);
    } catch (e) {
        console.log("l'abscence n'a pas pu être supprimé !")
    }

}


module.exports.deleteAbscence = async (req, res) => {

    try {
        const abscence = await AbscenceModel.findById(req.params.id);

        if (!abscence) {
            res.status(400).json({ message: "Cette etudiant n'existe pas !" });
        }

        const result = await abscence.deleteOne();
        res.status(200).json(result);
    } catch (e) {
        console.log(e + " l'abscence n'a pas été supprimé !")
    }


}

module.exports.saveAbscence = async (req, res) => {

    const abscence = await AbscenceModel.create(
        {
            nom: req.body.nom,
            periode: req.body.periode,
            date: req.body.date,
            groupe: req.body.groupe,

        }
    );
    res.status(200).json(abscence);
}

module.exports.getAbscenceByEtudiant = async (req, res) => {

    try {
        const nom = req.query.nom;

        // Recherchez les étudiants
        const abscences = await AbscenceModel.find({
            nom: nom
        });

        // Renvoyez les étudiants
        res.status(200).json(abscences);
    } catch (e) { console.log(e + " les abscences n'ont pas puent être récupéré !") }

};