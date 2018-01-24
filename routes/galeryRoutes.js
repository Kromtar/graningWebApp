const authJwt = require('../middlewares/authJwt');
const roleChecker = require('../middlewares/accountRoleChecker');
const GaleryController = require('../controllers/galery');

//TODO: Agregar middleware administrador

module.exports = app => {
  app.post('/api/AddProjectToGalery', GaleryController.AddProjectToGalery);
  app.get('/api/getGalery', GaleryController.getGalery);
};
