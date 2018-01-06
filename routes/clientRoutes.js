const authJwt = require('../middlewares/authJwt');
const UserController = require('../controllers/user');

//TODO: Agregar middleware administrador

module.exports = app => {
  app.get('/api/allClients', authJwt.ensureAuth, UserController.getAllClientsUsers);
};
