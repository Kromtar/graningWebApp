const mongoose = require('mongoose');
const jwt = require('../services/jwt');

const User = mongoose.model('users');

async function createUser(req, res) {
  //TODO:
  //Validar parametros (en particular y conjunto)
  //Considerar errores
  //Que se realice la peticion por denegacion de servicio

  const params = req.body;

  const user = new User({
    name: params.name,
    email: params.email,
    role:  params.role,
    surname: params.surname,
    address:  params.address,
    department: params.department,
    company: params.company,
    phone1: params.phone1,
    phone2: params.phone2,
    creationDate: Date.now(),
    workstation: params.workstation
  });
  user.password = user.generateHash(params.password);
  try {
    await user.save();
    res.send({});
  } catch(err){
    //TODO: Buscar error de respuesta
    res.status(422).send(err);
  }
}

function loginUser(req, res) {
  //Validar parametros (en particular y conjunto)
  //Considerar errores
  //Que se realice la peticion por denegacion de servicio
  //Es necesario agregar el await ?

  const params = req.body;
  const email = params.email;
  const password = params.password;
  const getToken = params.getToken;


  User.findOne({ email }, (err, user) => {
    if (err) {
      res.status(500).send({ message: 'DB connection error' });
    } else if (!user) {
      res.status(404).send({ message: 'Invalid user' });
    } else if (!user.validPassword(password)) {
      res.status(401).send({ message: 'Invalid password' });
    } else if (getToken) {
      //Retorna el token JWT
      res.status(200).send({
        token: jwt.createToken(user)
      });
    } else {
      //Retorna el objeto de user
      res.status(200).send({ user });
    }
  });
}

async function getAllClientsUsers(req, res) {
  //TODO:Agregar error si no logra conectarse a la db
  const clientsUsers = await User.find(
    { role: 'CLIENT' },
    {
      name: 1,
      surname: 1,
      company: 1,
      phone1: 1,
      phone2: 1,
      creationDate: 1,
      workstation: 1,
      projects: 1,
      email: 1
    }
  );
  res.send(clientsUsers);
}

module.exports = {
  createUser,
  loginUser,
  getAllClientsUsers
};
