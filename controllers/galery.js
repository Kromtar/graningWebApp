const mongoose = require('mongoose');
const Galerys = mongoose.model('galerys');

//Crea una nuevo proyecto para la galeria
async function AddProjectToGalery(req, res) {
  const params = req.body;
  try {
    const galery = new Galerys({
      internalcode: params.internalcode,
      name: params.name,
      year: params.year,
      company: params.company,
      description: params.description,
      work: params.work,
      numberOfImg: params.numberOfImg,
    });
    const res = galery.save();
    res.status(200).send(res);
  } catch(err){
    res.status(404).send(err);
  }
}

//Lista todas las galerias
async function getGalery(req, res) {
  try {
    const galery = await Galerys.find().sort({ internalcode: -1 });
    res.status(200).send(galery);
  } catch(err){
    res.status(404).send(err);
  }
}


module.exports = {
  AddProjectToGalery,
  getGalery
};
