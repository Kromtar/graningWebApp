const authJwt = require('../middlewares/authJwt');
const ProjectController = require('../controllers/project');
const roleChecker = require('../middlewares/accountRoleChecker');

//TODO: Agregar middleware administrador

module.exports = app => {
  app.post('/api/createProject', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.createProject); //OK
  app.get('/api/allProjects', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.getAllProjects);  //OK
  app.get('/api/getProjectDetail', authJwt.ensureAuth, ProjectController.getProjectDetail); //OK
  app.get('/api/getClientsFromProject', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.getClientsFromProject); //OK
  app.put('/api/updateProjectGeneral', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.updateProjectGeneral); //OK
  app.put('/api/addStageToProject', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.addStageToProject); //OK
  app.put('/api/deleteStageFromProject', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.deleteStageFromProject); //OK
  app.put('/api/addRevsToProject', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.addRevsToProject); //OK
  app.put('/api/deleteRevFromProject', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.deleteRevFromProject); //OK
  app.put('/api/editRevFromProject', authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.editRevFromProject); //OK
  app.post('/api/addLinkToPtoject',  authJwt.ensureAuth, roleChecker.ensureRole, ProjectController.addLinkToPtoject); //OK
  app.post('/api/deleteLinkFromProject', ProjectController.deleteLinkFromProject);
};
