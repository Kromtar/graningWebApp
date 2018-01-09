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

module.exports = {
  createProject,
  getAllProjects,
  getProjectDetail,
  getClientsFromProject
};
