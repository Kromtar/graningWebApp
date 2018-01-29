const authJwt = require('../middlewares/authJwt');
const roleChecker = require('../middlewares/accountRoleChecker');
const UserController = require('../controllers/user');

module.exports = app => {
  //Open for clients and Admins
  app.get(
    '/api/getClientDetail',
    authJwt.ensureAuth,
    UserController.getClientDetail
  );

  //Only for Admins
  app.get(
    '/api/allClients',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    UserController.getAllClientsUsers
  );
  //TODO: SELLAR
  app.post(
    '/api/createUser',
    UserController.createUser
  );
  app.post(
    '/api/addProjectToClient',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    UserController.addProjectToClient
  );
  app.post(
    '/api/removeProjectToClient',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    UserController.removeProjectToClient
  );
  app.post(
    '/api/updateClientGeneral',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    UserController.updateClientGeneral
  );
  app.post(
    '/api/changePassword',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    UserController.changePassword
  );
  app.delete('/api/deleteUser',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    UserController.deleteUser
  );
};
