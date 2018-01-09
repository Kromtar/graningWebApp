const mongoose = require('mongoose');

const Projects = mongoose.model('projects');
const Users = mongoose.model('users');

async function createProject(req, res){

  function toDate(dateStr) {
    var parts = dateStr.split("-");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }

  const project = new Projects({
    name: req.body.name,
    internalcode: req.body.internalcode,
    proyectnumber: req.body.proyectnumber,
    contractnumber: req.body.contractnumber,
    purchaseordernumber: req.body.purchaseordernumber,
    openprojectdate: toDate(req.body.openprojectdate),
    term: req.body.term,
  });

  try {
    await project.save();
    res.send({});
  } catch(err){
    //TODO: Buscar error de respuesta
    res.status(422).send(err);
  }
}

//TODO:Agregar el try
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

async function getProjectDetail(req, res){
  Projects.findOne({ _id: req.headers.id }, (err, project) => {
    if (err) {
      res.status(500).send({ message: 'DB connection error' });
    } else if (!project){
      res.status(404).send({ message: 'Invalid project id' });
    } else {
      res.status(200).send(project);
    }
  });
}

//TODO: Ocupar esta estrucutra en las pet tipo find
async function getClientsFromProject(req, res){
    const clientsFromProject = Users.find(
      {_projects: req.headers.id},
      {name: 1, surname: 1, company: 1, email: 1, phone1: 1},
      (err, clients) => {
      if(err){
        res.status(404).send({ message: 'Invalid project id' });
      }else{
        res.send(clients);
      }
    });
}

//Edita informacion general de un proyecto
async function updateProjectGeneral(req, res){

  function toDate(dateStr) {
    var parts = dateStr.split("-");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }

  req.body.openprojectdate = req.body.openprojectdate ? toDate(req.body.openprojectdate) : null;
  req.body.closeprojectdate = req.body.closeprojectdate ? toDate(req.body.closeprojectdate) : null;

  Projects.findByIdAndUpdate(req.headers.id, req.body, (err, updateProject) => {
    if(err){
      res.status(500).send({ message: 'Error en la peticion' });
    }else{
      if(!updateProject){
        res.status(404).send({ message: 'No se pudo updatear la cancion en la db' });
      }else{
        res.status(200).send(updateProject);
      }
    }
  });
}

//Añade etapas a un proyecto
async function addStageToProject(req, res){

  try{
    //TODO: Manejo de error
    const update = await Projects.updateOne(
     {
       _id: req.headers.id
     },
     {
         $addToSet: {
           _stage: { $each: req.body }
         }
       }
     ).exec();
    res.send({});
 } catch (err){
   res.status(422).send(err);
 }
}

async function deleteStageFromProject(req, res){

  try{
    //TODO: Manejo de error
    const update = await Projects.updateOne(
    {
      _id: req.headers.id
    },
    {
     $pull: {
       _stage: { _id: { $in: req.body } }
     }
    }
    ).exec();

    res.send({});

  } catch (err){
    res.status(422).send(err);
  }
}

module.exports = {
  createProject,
  getAllProjects,
  getProjectDetail,
  getClientsFromProject,
  updateProjectGeneral,
  addStageToProject,
  deleteStageFromProject
};
