const authJwt = require('../middlewares/authJwt');
const roleChecker = require('../middlewares/accountRoleChecker');
const UserController = require('../controllers/user');

//TODO: Agregar middleware administrador

module.exports = app => {
  app.get('/api/allClients', authJwt.ensureAuth, roleChecker.ensureRole, UserController.getAllClientsUsers);
  app.post('/api/createUser', UserController.createUser);
  app.get('/api/getClientDetail', authJwt.ensureAuth, UserController.getClientDetail);
  app.put('/api/addProjectToClient', authJwt.ensureAuth, roleChecker.ensureRole, UserController.addProjectToClient);
  app.put('/api/removeProjectToClient', authJwt.ensureAuth, roleChecker.ensureRole, UserController.removeProjectToClient);
  app.put('/api/updateClientGeneral', authJwt.ensureAuth, roleChecker.ensureRole, UserController.updateClientGeneral);
  app.put('/api/changePassword', authJwt.ensureAuth, roleChecker.ensureRole, UserController.changePassword);
  app.put('/api/deleteUser', authJwt.ensureAuth, roleChecker.ensureRole, UserController.deleteUser);
};
