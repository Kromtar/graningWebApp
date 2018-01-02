const jwt = require('jwt-simple');
const moment = require('moment');
const keys = require('../config/keys');

exports.createToken = function(user){
  let payload = {
    name: user.name,
    email: user.email,
    role: user.role,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix()
  };

  return jwt.encode(payload, keys.jwtSecret);
};
