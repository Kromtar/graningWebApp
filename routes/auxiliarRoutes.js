const authJwt = require('../middlewares/authJwt');
const roleChecker = require('../middlewares/accountRoleChecker');
const auxiliarController = require('../controllers/auxiliar');

module.exports = app => {
  //Only for Admins
  app.get(
    '/api/getDropboxKey',
    authJwt.ensureAuth,
    roleChecker.ensureRole,
    auxiliarController.getDropboxKey
  );
};
