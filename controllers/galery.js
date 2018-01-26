const mongoose = require('mongoose');

const Galerys = mongoose.model('galerys');

async function AddProjectToGalery(req, res) {
  const params = req.body;
  const galery = new Galerys({
    internalcode: params.internalcode,
    name: params.name,
    year: params.year,
    company: params.company,
    description: params.description,
    work: params.work,
    numberOfImg: params.numberOfImg,
  });
  try {
    const res = galery.save();
    res.send({res});
  } catch(err){
    //TODO: Buscar error de respuesta
    res.status(422).send(err);
  }
}

async function getGalery(req, res) {
  const galery = await Galerys.find().sort({ internalcode: -1 });
  res.send(galery);
}


module.exports = {
  AddProjectToGalery,
  getGalery
};
