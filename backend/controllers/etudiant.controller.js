const EtudiantModel = require('../models/etudiant');


module.exports.getEtudiants = async(req,res) => {
    const etudiants = await EtudiantModel.find();
    res.status(200).json(etudiants)
}

module.exports.editEtudiant = async (req,res) => {

    try{
        const etudiant = await EtudiantModel.findById(req.params.id)

    if(!etudiant){
        res.status(400).json({message:"Cette etudiant n'existe pas !"});
    }

    const updateEtudiant = await EtudiantModel.findByIdAndUpdate(etudiant,
        req.body,{
            new:true,
        });

    res.status(200).json(updateEtudiant);
    }catch(e){
        console.log(e +" l'étudiant n'a pas pu être trouvé ")
    }
    
}

module.exports.getEtudiant = async (req,res) =>{

    try{
        const etudiant = await EtudiantModel.findById(req.params.id);
    res.status(200).json(etudiant)
    }catch(e){
        console.log(e + " l'étudiant n'a pas pu être trouvé")
    }
    
}

module.exports.deleteEtudiant = async(req,res) => {


    try{
        const etudiant = await EtudiantModel.findById(req.params.id);

        if(!etudiant){
            res.status(400).json({message:"Cette etudiant n'existe pas !"});
        }
    
       const result = await etudiant.deleteOne();
        res.status(200).json(result);
    }
   catch(e){
    console.log(e + "suppression échoué !")
   }
}

module.exports.saveEtudiant = async(req , res) => {


    try{
        const etudiant = await EtudiantModel.create(
            {
                nom:req.body.nom,
                prenom:req.body.prenom,
                email:req.body.email,
                groupe:req.body.groupe,
                passe:req.body.passe,
            }
        );
        res.status(200).json(etudiant);
    }
    catch(e){
        console.log(e +" erreur de l'enregistrement !");
    }
    
}