const jwt = require('jwt-simple');
const moment = require('moment');
const keys = require('../config/keys');

const secret = keys.jwtSecret;

exports.ensureAuth = function (req, res, next) {
  if (!req.headers.auth) {
    return res.status(403).send({ message: 'Missing Header' });
  }

  const token = req.headers.auth.replace(/["']/g, ''); //Eliminamos comillas del header auth

  try {
    const payload = jwt.decode(token, secret);  //Decodificando token
    req.user = payload; //Dejamos disponible el contenido del payload
    if (payload.exp <= moment().unix()) {       //Verificamos tiempo
      return res.status(401).send({ message: 'Expired Token' });
    }
  } catch (ex) {
    return res.status(404).send({ message: 'Invalid Token' });
  }

  next();
};
