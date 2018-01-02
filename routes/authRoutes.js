const authJwt = require('../middlewares/authJwt');
const UserController = require('../controllers/user');

module.exports = app => {
  app.get('/api/testOpen', (req, res) => res.send('Hola Graning :), este lugar NO necesita token'));

  app.get('/api/testClose', authJwt.ensureAuth, (req, res) => {
    res.send('Hola Graning :), este ligar SI necesita token');
  });

  app.post('/api/createUser', UserController.createUser);

  app.post('/api/loginUser', UserController.loginUser);
};
