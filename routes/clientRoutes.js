const authJwt = require('../middlewares/authJwt');
const roleChecker = require('../middlewares/accountRoleChecker');
const UserController = require('../controllers/user');

//TODO: Agregar middleware administrador

module.exports = app => {
  app.get('/api/allClients', authJwt.ensureAuth, roleChecker.ensureRole, UserController.getAllClientsUsers);
  app.post('/api/createUser', UserController.createUser);
};
