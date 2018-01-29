const authJwt = require('../middlewares/authJwt');
const ProjectController = require('../controllers/project');
const roleChecker = require('../middlewares/accountRoleChecker');

module.exports = app => {
  //Open for clients and Admins
  app.get(
    '/api/getProjectDetail',
    authJwt.ensureAuth,
    ProjectController.getProjectDetail
  );

  //Only for Admins
  app.post(
    '/api/createProject',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    ProjectController.createProject
  );
  app.get(
    '/api/allProjects',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    ProjectController.getAllProjects
  );
  app.get(
    '/api/getClientsFromProject',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    ProjectController.getClientsFromProject
  );
  app.post(
    '/api/updateProjectGeneral',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    ProjectController.updateProjectGeneral
  );
  app.post(
    '/api/addStageToProject',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    ProjectController.addStageToProject
  );
  app.post(
    '/api/deleteStageFromProject',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    ProjectController.deleteStageFromProject
  );
  app.post(
    '/api/addRevsToProject',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    ProjectController.addRevsToProject
  );
  app.post(
    '/api/deleteRevFromProject',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    ProjectController.deleteRevFromProject
  );
  app.post(
    '/api/editRevFromProject',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    ProjectController.editRevFromProject
  );
  app.post(
    '/api/addLinkToPtoject',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    ProjectController.addLinkToPtoject
  );
  app.delete(
    '/api/deleteLinkFromProject',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    ProjectController.deleteLinkFromProject
  );
  app.delete(
    '/api/deleteProject',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    ProjectController.deleteProject
  );
};
