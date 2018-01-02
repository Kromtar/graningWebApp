const mongoose = require('mongoose');
const jwt = require('../services/jwt');

const User = mongoose.model('users');

function createUser(req, res){
  //TODO:
  //Validar parametros (en particular y conjunto)
  //Considerar errores
  //Que se realice la peticion por denegacion de servicio

  var params = req.body;

  const user = new User({
    email: params.email,
    role: 'TEST'
  });
  user.password = user.generateHash(params.password);
  user.save();

  res.send({});
}

function loginUser(req, res){
  //Validar parametros (en particular y conjunto)
  //Considerar errores
  //Que se realice la peticion por denegacion de servicio

  var params = req.body;
  var email = params.email;
  var password = params.password;
  var getToken = params.getToken;


  User.findOne({email: email}, (err, user) => {
    if(err){
      res.status(500).send({message: 'DB connection error'});
    } else {
      if(!user){
        res.status(404).send({message: 'Invalid user'});
      } else {
        if (!user.validPassword(password)) {
          res.status(401).send({message: 'Invalid password'});
        } else {

          if(getToken){
            //Retorna el token JWT
            res.status(200).send({
              token: jwt.createToken(user)
            });
          }else{
            //Retorna el objeto de user
            res.status(200).send({user: user});
          }

        }
      }
    }

  });
}

module.exports = {
  createUser,
  loginUser
};
