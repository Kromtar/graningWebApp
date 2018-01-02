const jwt = require('jwt-simple');
const moment = require('moment');
const keys = require('../config/keys');

const secret = keys.jwtSecret;

exports.ensureAuth = function (req, res, next) {
  if (!req.headers.auth) {
    return res.status(403).send({ message: 'Missing Header' });
  }

  console.log('Test');

  next();
};
