const authJwt = require('../middlewares/authJwt');
const ProjectController = require('../controllers/project');
const roleChecker = require('../middlewares/accountRoleChecker');

//TODO: Agregar middleware administrador

module.exports = app => {
  app.post('/api/createProject', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.createProject);
  app.get('/api/allProjects', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.getAllProjects);
  app.get('/api/getProjectDetail', authJwt.ensureAuth, ProjectController.getProjectDetail);
  app.get('/api/getClientsFromProject', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.getClientsFromProject);
  app.put('/api/updateProjectGeneral', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.updateProjectGeneral);
  app.put('/api/addStageToProject', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.addStageToProject);
  app.put('/api/deleteStageFromProject', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.deleteStageFromProject);
  app.put('/api/addRevsToProject', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.addRevsToProject);
  app.put('/api/deleteRevFromProject', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.deleteRevFromProject);
  app.put('/api/editRevFromProject', ProjectController.editRevFromProject);
};
