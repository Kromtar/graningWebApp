const mongoose = require('mongoose');
const jwt = require('../services/jwt');

const User = mongoose.model('users');

//Crea un nuevo usuario
async function createUser(req, res) {
  const params = req.body;
  try {
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
    const newUser = await user.save();
    res.status(200).send(newUser);
  } catch(err){
    res.status(404).send(err);
  }
}

//Login de usuario
async function loginUser(req, res) {

  const params = req.body;
  const email = params.email;
  const password = params.password;
  const getToken = params.getToken;

  try {
    const userLogin = await User.findOne({email});
    if(userLogin){
      if(userLogin.validPassword(password)){
        if(getToken){
          res.status(200).send({
            token: jwt.createToken(userLogin)
          });
        }else{
          res.status(200).send({});
        }
      }
    }else{
      res.status(401).send(err);
    }
  } catch(err){
    res.status(404).send(err);
  }
}

//Login de usuario admin
async function loginUserAdmin(req, res) {

  const params = req.body;
  const email = params.email;
  const password = params.password;
  const getToken = params.getToken;

  try {
    const userLogin = await User.findOne({email});
    if(userLogin){
      if(userLogin.role === 'ADMIN'){
        if(userLogin.validPassword(password)){
          if(getToken){
            res.status(200).send({
              token: jwt.createToken(userLogin)
            });
          }else{
            res.status(200).send({});
          }
        }
      }
    }else{
      res.status(401).send(err);
    }
  } catch(err){
    res.status(404).send(err);
  }

}

//Lista todos los clientes
async function getAllClientsUsers(req, res) {
  try {
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
    res.status(200).send(clientsUsers);
  } catch(err){
    res.status(404).send(err);
  }
}

//Obtiene los detalles de un cliente
async function getClientDetail(req, res){
  try{
    const user = await User.findOne({ _id: req.headers.id }).populate({path: '_projects' });
    res.status(200).send(user);
  } catch(err){
    res.status(404).send(err);
  }
}

//Añade un projecto a un cliente
async function addProjectToClient(req, res){

  try {
    const update = await User.updateOne(
    {
      _id: req.body.clientId
    },
    {
     $push: {
       _projects: req.body.projectId
     }
    }
    ).exec();
    res.status(200).send(update);
  } catch(err){
    res.status(404).send(err);
  }

}

//Remueve un projecto de un cliente
async function removeProjectToClient(req, res){

  try{
    const update = await User.updateOne(
    {
      _id: req.body.clientId
    },
    {
     $pull: {
       _projects: req.body.projectId
     }
    }
    ).exec();
    res.status(200).send(update);
  } catch(err){
    res.status(404).send(err);
  }

}

//Edita la informacion general de un cliente
async function updateClientGeneral(req, res){
  try {
    const clientUpdated = await User.findByIdAndUpdate(req.body.id, req.body.values);
    res.status(200).send(clientUpdated);
  } catch(err){
    res.status(404).send(err);
  }
}

//Cambia la contraseña de un usuario
async function changePassword(req, res){
  try {
    const user = new User();
    passwordHash = user.generateHash(req.body.pass);
    const userPasswordUpdate = await User.updateOne(
    {
      _id: req.body.id
    },
    {
     $set: {
       'password': passwordHash,
     }
    }
    ).exec();
    res.status(200).send(userPasswordUpdate);
  } catch(err){
    res.status(404).send(err);
  }
}

//Elimina un usuario
async function deleteUser(req, res){
  try {
    const userDelete = await User.remove({ '_id':req.headers.id })
    res.status(200).send(userDelete);
  } catch(err){
    res.status(404).send(err);
  }
}

module.exports = {
  createUser,
  loginUser,
  loginUserAdmin,
  getAllClientsUsers,
  getClientDetail,
  addProjectToClient,
  removeProjectToClient,
  updateClientGeneral,
  changePassword,
  deleteUser
};
