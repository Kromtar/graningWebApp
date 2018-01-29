const jwt = require('jwt-simple');

const secret = process.env.JWTSECRET;

exports.ensureRole = function (req, res, next) {
  if (!req.headers.auth) {
    return res.status(403).send({ message: 'Missing Header' });
  }

  //Eliminamos comillas del header auth
  const token = req.headers.auth.replace(/["']/g, '');

  try {
    const payload = jwt.decode(token, secret);
    if (payload.role !== 'ADMIN') {
      return res.status(404).send({ message: 'Invalid User Role' });
    }
  } catch (ex) {
    return res.status(404).send({ message: 'Invalid Token' });
  }

  next();
};
