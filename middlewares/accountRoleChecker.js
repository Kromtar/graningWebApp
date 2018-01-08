const jwt = require('jwt-simple');
const keys = require('../config/keys');

const secret = keys.jwtSecret;

exports.ensureRole = function (req, res, next) {
  if (!req.headers.auth) {
    return res.status(403).send({ message: 'Missing Header' });
  }

  const token = req.headers.auth.replace(/["']/g, ''); //Eliminamos comillas del header auth

  try {
    const payload = jwt.decode(token, secret);  //Decodificando token
    if (payload.role !== 'ADMIN') {
      return res.status(404).send({ message: 'Invalid User Role' });
    }
  } catch (ex) {
    return res.status(404).send({ message: 'Invalid Token' });
  }

  next();
};
