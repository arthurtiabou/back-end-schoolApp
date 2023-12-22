const AdminModel = require('../models/admin');


module.exports.getAdmins = async (req, res) => {

    try {
        const admins = await AdminModel.find();
        res.status(200).json(admins)
    } catch (e) {
        console.log(e + " l'admins n'a pas été trouvé !")
    }
}

module.exports.editAdmin = async (req, res) => {

    try {
        const admin = await AdminModel.findById(req.params.id)

        if (!admin) {
            res.status(400).json({ message: "Cette admin n'existe pas !" });
        }

        const updateAdmin = await AdminModel.findByIdAndUpdate(admin,
            req.body, {
            new: true,
        });

        res.status(200).json(updateAdmin);
    } catch (e) {
        console.log(e + " l'admins n'a pas été trouvé !")
    }

}

module.exports.getAdmin = async (req, res) => {

    try {
        const admin = await AdminModel.findById(req.params.id);
        res.status(200).json(admin)

    } catch (e) {
        console.log(e + " l'admins n'a pas été trouvé !")
    }


}


module.exports.deleteAdmin = async (req, res) => {


    try {

        const admin = await AdminModel.findById(req.params.id);

        if (!admin) {
            res.status(400).json({ message: "Cette admin n'existe pas !" });
        }

        const result = await admin.deleteOne()
        res.status(200).json(result);

    } catch (e) {
        console.log(e + " l'admins n'a pas été trouvé !")
    }

}

module.exports.saveAdmin = async (req, res) => {


    try {

        const admin = await AdminModel.create(
            {
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                passe: req.body.passe,
            }
        );
        res.status(200).json(admin);

    } catch (e) {
        console.log(e + " l'admins n'a pas été trouvé !")
    }
}