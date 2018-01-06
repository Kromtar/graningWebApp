const authJwt = require('../middlewares/authJwt');
const ProjectController = require('../controllers/project');

//TODO: Agregar middleware administrador

module.exports = app => {
  app.get('/api/testcreateproject', ProjectController.createProject);
  app.get('/api/allProjects', ProjectController.getAllProjects);
};
