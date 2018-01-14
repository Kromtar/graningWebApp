const mongoose = require('mongoose');
const _ = require('lodash');

const Projects = mongoose.model('projects');
const Users = mongoose.model('users');
const Stages = mongoose.model('stages');
const Reviews = mongoose.model('reviews');

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
  //TODO:Manejo de errores
  const project = await Projects.findOne({ _id: req.headers.id }).populate({path: '_stage', populate: {path: '_review'} });
  res.send(project);
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
    //TODO: Manejo de error, error si se tratan de guardar mas de 2 stages
    //por cada nueva stage hay que crear una nueva

    for(var key in req.body){

      const stage = new Stages({
        name: req.body[key].name,
        _project: req.headers.id
      });

      //acumular todas las respuestas
      const newStage = await stage.save();

      //relacionar todas las nuevas stages
      const updatedProject = await Projects.updateOne(
      {
        _id: req.headers.id
      },
      {
       $push: {
         _stage: newStage._id
       }
      }
      ).exec();

    }

    res.send({});
 } catch (err){
   res.status(422).send(err);
 }
}

//Elimina etapas de un proyecto
async function deleteStageFromProject(req, res){

  const stagesDeleted = await Stages.remove({'_id':{'$in':req.body}});

  const reviewDeleted = await Reviews.remove({'_stage':{'$in':req.body}});

  const update = await Projects.updateOne(
  {
    _id: req.headers.id
  },
  {
   $pull: {
     _stage: { $in: req.body }
   }
  }
  ).exec();

  res.send({});
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
      const review = await new Reviews({
        name: req.body[key].data.name,
        companytoclientdate: req.body[key].data.companytoclientdate ? toDateWhitSlash(req.body[key].data.companytoclientdate) : null,
        clienttocompany: req.body[key].data.clienttocompany ? toDateWhitSlash(req.body[key].data.clienttocompany) : null,
        _stage: req.body[key].stageId,
        _project: req.headers.id
      });

      const newReview = await review.save();

      const updatedStaege = await Stages.updateOne(
      {
        _id: req.body[key].stageId
      },
      {
       $push: {
         _review: newReview._id
       }
      }
      ).exec();

      res.send({});
  }} catch(err){
    res.status(422).send(err);
  }
}

//Elimina rev de una etapa de un proyecto
//TODO: REMOVER FOR Y HACERLO IN PLACE, ver manejo de errores
async function deleteRevFromProject(req, res){
  try{
    for (var key in req.body) {
      var obj = req.body[key];

      const reviewDeleted = await Reviews.remove({ '_id':req.body[key].idRev })

      const update = await Stages.updateOne(
      {
        _id: req.body[key].idStage
      },
      {
       $pull: {
         _review: req.body[key].idRev
       }
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
//TODO: ERROR AL ACTUALIZAR FECHA REV
//TODO: Implementar try
async function editRevFromProject(req, res){

  //try{
    for (var stage in req.body) {
      var obj = req.body[stage];

      for (var review in obj) {

        console.log(req.body[stage][review].clienttocompany);


        const updatedReview = await Reviews.updateOne(
        {
          _id: review
        },
        {
         $set: {
           'name': req.body[stage][review].name,
           'companytoclientdate': req.body[stage][review].companytoclientdate,
           'clienttocompany:':'2018-01-25T03:00:00.000Z',
         }
        }
        ).exec();

      }
    }

  res.send({});
}

//Agrega un link a un project
async function addLinkToPtoject(req, res){

  const updatedReview = await Projects.updateOne(
  {
    _id: req.body.projectId
  },
  {
   $set: {
     'url': req.body.link,
   }
  }
  ).exec();


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
  editRevFromProject,
  addLinkToPtoject
};
