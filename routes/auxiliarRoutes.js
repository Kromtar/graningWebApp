const authJwt = require('../middlewares/authJwt');
const roleChecker = require('../middlewares/accountRoleChecker');
const auxiliarController = require('../controllers/auxiliar');

module.exports = app => {
  app.post('/api/getDropboxKey', authJwt.ensureAuth, roleChecker.ensureRole, auxiliarController.getDropboxKey);
};
