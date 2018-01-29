const authJwt = require('../middlewares/authJwt');
const UserController = require('../controllers/user');

module.exports = app => {
  //Rutas de test
  app.get('/api/testOpen', (req, res) => res.send('Hola Graning :), este lugar NO necesita token'));
  app.get('/api/testClose', authJwt.ensureAuth, (req, res) => {
    res.send('Hola Graning :), este ligar SI necesita token');
  });

  //Rutas para manejo de login
  app.post(
    '/api/loginUser',
    UserController.loginUser
  );
  app.post(
    '/api/loginUserAdmin',
    UserController.loginUserAdmin
  );
  app.get('/api/validateToken', authJwt.ensureAuth, (req, res) => {
    res.send({ status: true });
  });
};
