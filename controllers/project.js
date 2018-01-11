const mongoose = require('mongoose');
const _ = require('lodash');

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
    openprojectdate: req.body.openprojectdate ? toDate(req.body.openprojectdate) : null ,
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

//Elimina etapas de un proyecto
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

//TODO: REMOVER FOR Y HACERLO IN PLACE, ver manejo de errores
//Agrega revisiones a un estado de un proyecto
async function addRevsToProject(req, res){

  function toDateWhitSlash(dateSrt){
    var dateParts = dateSrt.split("/");
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
  }

  try{

    for (var key in req.body) {
      var obj = req.body[key];

      obj.data.companytoclientdate = obj.data.companytoclientdate ? toDateWhitSlash(obj.data.companytoclientdate) : null;
      obj.data.clienttocompany = obj.data.clienttocompany ? toDateWhitSlash(obj.data.clienttocompany) : null;

      const update = await Projects.updateOne(
      {
        _id: req.headers.id,
        '_stage._id': obj.stageId,
      },{
        $push: { '_stage.$._review': obj.data }
      }
      ).exec();
    }

    res.send({});
  } catch(err){
    res.status(422).send(err);
  }
}

//Elimina rev de una etapa de un proyecto
//TODO: REMOVER FOR Y HACERLO IN PLACE, ver manejo de errores
async function deleteRevFromProject(req, res){

  try{
    for (var key in req.body) {
      var obj = req.body[key];

      const update = await Projects.update(
      {
        _id: req.headers.id,
        '_stage._id': obj.idStage,
      },
      {
        $pull: { '_stage.$._review': { _id: obj.idRev } }
      }
      ).exec();

    }
    res.send({});
  } catch(err){
    res.status(422).send(err);
  }

}

//Edita revs de un proyecto
//TODO: REMOVER FOR Y HACERLO IN PLACE, ver manejo de errores
async function editRevFromProject(req, res){

  console.log(req.headers.id);
  console.log(req.body);


  //try{
    for (var stage in req.body) {
      var obj = req.body[stage];

      for (var review in obj) {
        console.log(req.body[stage][review].name);
        console.log('En Stage', stage, 'En Rev' ,review);
      }
    }

  res.send({});
}


module.exports = {
  createProject,
  getAllProjects,
  getProjectDetail,
  getClientsFromProject,
  updateProjectGeneral,
  addStageToProject,
  deleteStageFromProject,
  addRevsToProject,
  deleteRevFromProject,
  editRevFromProject
};
