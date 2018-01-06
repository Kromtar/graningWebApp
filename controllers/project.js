const mongoose = require('mongoose');

const Projects = mongoose.model('projects');
const Users = mongoose.model('users');

async function createProject(req, res){
  console.log('Creado modelo de project TEST');


  //CREA UN PROYECTO
  /*
  const project = new Projects({
    name: 'Nombre2',
    internalcode: 'codigo interno2',
    proyectnumber: 'numero proyecto2',
    contractnumber: 'numero contrato2',
    purchaseordernumber: 'numero orden de compra2',
    openprojectdate: Date.now(),
    closeprojectdate: Date.now(),
    term: 120,
    state: 'open',
    _stage: {
      name: 'stage name2',
      _review: {
        name: 'review name2'
      }
    }
  });


  //TODO: Agregar error de coneccion con DB
  await project.save();
  */


  //AGREGA UNA ETAPA A UN PROYECTO
  /*
  Projects.updateOne(
    {
      _id: '5a4e89ac4478572354b567e0'
    },
    {
      $addToSet: {
        _stage: {
          name: 'stage name 2'
        }
      }
    }
  ).exec();
  */

  //AGREGA UN PROYECTO A UN USER
  /*
  Users.updateOne(
    {
      _id: '5a4e91559d7ea43eac15c9fb'
    },
    {
      $addToSet: {
        _projects: '5a4e89ac4478572354b567e0'
      }
    }
  ).exec();
  */


  //BUSCA TODA LA INFO DE UN USER
  /*
  Users.findById('5a4e91559d7ea43eac15c9fb').populate('_projects').exec((err, data) => {
    console.log(data);
    res.send(data);
  });
  */

  res.send({});
}

async function getAllProjects(req, res){
  const projects = await Projects.find(
    {},
    {
      name: 1,
      internalcode: 1,
      proyectnumber: 1,
      openprojectdate: 1,
      state: 1,
      finished: 1
    }
  );
  res.send(projects);
}

module.exports = {
  createProject,
  getAllProjects
};
