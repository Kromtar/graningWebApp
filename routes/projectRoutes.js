const authJwt = require('../middlewares/authJwt');
const ProjectController = require('../controllers/project');
const roleChecker = require('../middlewares/accountRoleChecker');

//TODO: Agregar middleware administrador

module.exports = app => {
  app.post('/api/createProject',authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.createProject);
  app.get('/api/allProjects',authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.getAllProjects);
  app.get('/api/getProjectDetail', authJwt.ensureAuth, ProjectController.getProjectDetail);
  app.get('/api/getClientsFromProject', ProjectController.getClientsFromProject);
};
