const jwt = require('jwt-simple');
const moment = require('moment');
const keys = require('../config/keys');

exports.createToken = function (user) {
  const payload = {
    name: user.name,
    email: user.email,
    role: user.role,
    id: user._id,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix()
  };

  return jwt.encode(payload, keys.jwtSecret);
};
