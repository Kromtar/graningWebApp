const authJwt = require('../middlewares/authJwt');
const roleChecker = require('../middlewares/accountRoleChecker');
const GaleryController = require('../controllers/galery');

module.exports = app => {
  //Open to public
  app.get(
    '/api/getGalery',
    GaleryController.getGalery
  );

  //Only for Admins
  //TODO: SELLAR
  app.post(
    '/api/AddProjectToGalery',
    GaleryController.AddProjectToGalery
  );
};
