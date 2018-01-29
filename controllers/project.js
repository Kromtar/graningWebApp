const mongoose = require('mongoose');

const Projects = mongoose.model('projects');
const Users = mongoose.model('users');
const Stages = mongoose.model('stages');
const Reviews = mongoose.model('reviews');

//Crea un nuevo projecto
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
    const newProject = await project.save();
    res.status(200).send(newProject);
  } catch(err){
    res.status(404).send(err);
  }
}

//Obtiene la lista de todos los projectos
async function getAllProjects(req, res){
  try{
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
    res.status(200).send(projects);
  } catch(err){
    res.status(404).send(err);
  }
}

//Obtiene los detalles de un porjecto
async function getProjectDetail(req, res){
  try {
    const projectDetail = await Projects.findOne({ _id: req.headers.id }).populate({path: '_stage', populate: {path: '_review'} });
    res.status(200).send(projectDetail);
  } catch(err){
    res.status(404).send(err);
  }
}

//Obtiene los clientes asociados a un projecto
async function getClientsFromProject(req, res){
  try {
    const projectDetail = await Users.find(
      {_projects: req.headers.id},
      {name: 1, surname: 1, company: 1, email: 1, phone1: 1}
    );
    res.status(200).send(projectDetail);
  } catch(err){
    res.status(404).send(err);
  }
}

//Edita informacion general de un projecto
async function updateProjectGeneral(req, res){

  function toDate(dateStr) {
    var parts = dateStr.split("-");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }

  req.body.openprojectdate = req.body.openprojectdate ? toDate(req.body.openprojectdate) : null;
  req.body.closeprojectdate = req.body.closeprojectdate ? toDate(req.body.closeprojectdate) : null;

  try {
    const projectDetail = await Projects.findByIdAndUpdate(req.body.id, req.body.values);
    res.status(200).send(projectDetail);
  } catch(err){
    res.status(404).send(err);
  }
}

//Añade etapas a un projecto
async function addStageToProject(req, res){
  try{
    var newStages = [];
    var updatedProjects = [];
    for(var key in req.body.values){

      const stage = new Stages({
        name: req.body.values[key].name,
        _project: req.body.id
      });

      //Guarda la stage
      const newStage = await stage.save();
      newStages.push(newStage);

      //Relacionar la staje con el projecto
      const updatedProject = await Projects.updateOne(
        {
          _id: req.body.id
        },
        {
         $push: {
           _stage: newStage._id
         }
        }
      ).exec();
      updatedProjects.push(updatedProject);
    }
    res.status(200).send({newStages, updatedProjects});
  } catch (err){
    res.status(404).send(err);
  }
}

//Elimina etapas de un proyecto
async function deleteStageFromProject(req, res){

  try{
    const stagesDeleted = await Stages.remove({'_id':{'$in':req.body.values}});
    const reviewDeleted = await Reviews.remove({'_stage':{'$in':req.body.values}});
    const projectUpdated = await Projects.updateOne(
    {
      _id: req.body.id
    },
    {
     $pull: {
       _stage: { $in: req.body.values }
     }
    }
    ).exec();
    res.status(200).send({stagesDeleted, reviewDeleted, projectUpdated});
  } catch(err){
    res.status(404).send(err);
  }
}

//Añade revisiones a un proyecto
async function addRevsToProject(req, res){

  function toDateWhitSlash(dateSrt){
    var dateParts = dateSrt.split("/");
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
  }

  try{
    var newReviews = [];
    var updatedStages = [];
    for (var key in req.body.values ) {
      const review = new Reviews({
        name: req.body.values[key].data.name,
        companytoclientdate: req.body.values[key].data.companytoclientdate ? toDateWhitSlash(req.body.values[key].data.companytoclientdate) : null,
        clienttocompany: req.body.values[key].data.clienttocompany ? toDateWhitSlash(req.body.values[key].data.clienttocompany) : null,
        _stage: req.body.values[key].stageId,
        _project: req.body.id
      });

      const newReview = await review.save();
      newReviews.push(newReview);

      const updatedStage = await Stages.updateOne(
      {
        _id: req.body.values[key].stageId
      },
      {
       $push: {
         _review: newReview._id
       }
      }
      ).exec();
      updatedStages.push(updatedStage);
    }

    res.status(200).send({newReviews, updatedStages});
  } catch(err){
    res.status(404).send(err);
  }
}

//Elimina revisiones de un projecto
async function deleteRevFromProject(req, res){
  try{
    var reviewsDeleted = [];
    var stagesUpdated = [];
    for (var key in req.body) {
      var obj = req.body[key];

      const reviewDeleted = await Reviews.remove({ '_id':req.body[key].idRev })
      reviewsDeleted.push(reviewDeleted);

      const stageUpdated = await Stages.updateOne(
      {
        _id: req.body[key].idStage
      },
      {
       $pull: {
         _review: req.body[key].idRev
       }
      }
      ).exec();
      stagesUpdated.push(stageUpdated);

    }
    res.status(200).send({reviewsDeleted, stagesUpdated});
  } catch(err){
    res.status(404).send(err);
  }

}

//Edita revisiones de un proyecto
//TODO: Realizar ciclo de otra manera
async function editRevFromProject(req, res){
  try{
    Object.keys(req.body).map(async function(revId, index) {
      var data = req.body[revId];
      const reviewUpdated = await Reviews.updateOne(
        {
          _id: revId
        },
        {
         $set: {
           'name': data.name,
           'companytoclientdate': data.companytoclientdate,
           'clienttocompany': data.clienttocompany,
         }
        }
        ).exec();
    });
    res.status(200).send({});
  } catch(err){
    res.status(404).send(err);
  }
}

//Agrega un link y nombre de fichero a un proyecto
async function addLinkToPtoject(req, res){

  try {
    const updatedProject = await Projects.updateOne(
    {
      _id: req.body.data.projectId
    },
    {
     $set: {
       'url': req.body.data.link,
       'filename': req.body.name,
     }
    }
    ).exec();

    res.status(200).send(updatedProject);
  } catch(err){
    res.status(404).send(err);
  }

}

//Elimina un link y nombre de fichero de un projecto
async function deleteLinkFromProject(req, res){

  try{
    const updatedProject = await Projects.updateOne(
    {
      _id: req.headers.id
    },
    {
     $set: {
       'url': null,
       'filename': null,
     }
    }
    ).exec();
    res.status(200).send(updatedProject);
  } catch(err){
    res.status(404).send(err);
  }

}

//Elimina un proyecto y todo lo relacionado
async function deleteProject(req, res){

  try {
    const reviewDelete = await Reviews.remove({ '_project':req.headers.id });
    const stageDelete = await Stages.remove({ '_project':req.headers.id });
    const updateUser = await Users.updateOne(
    {
      _projects: req.headers.id
    },
    {
     $pull: {
       _projects: req.headers.id
     }
    }
    ).exec();
    const projectDelete = await Projects.remove({ '_id':req.headers.id });

    res.status(200).send({reviewDelete, stageDelete, updateUser, projectDelete});
  } catch(err){
    res.status(404).send(err);
  }

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
  addLinkToPtoject,
  deleteLinkFromProject,
  deleteProject
};
