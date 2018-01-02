const jwt = require('jwt-simple');
const moment = require('moment');
const keys = require('../config/keys');

const secret =  keys.jwtSecret;

exports.ensureAuth = function(req, res, next){
  console.log('Ensure token section');
  next();
};
