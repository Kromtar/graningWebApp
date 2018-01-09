const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');

mongoose.Promise = global.Promise;

require('./models/User');
require('./models/Project');

const app = express();

app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, auth, id");
  next();

});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/authRoutes')(app);
require('./routes/clientRoutes')(app);
require('./routes/projectRoutes')(app);

mongoose.connect(config.mongodbHost.concat(config.dbName), {}, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Mongo conection OK');

    app.listen(config.serverPort, () => {
      console.log('Server ON, port:', config.serverPort);
      console.log('The environment is', process.env.NODE_ENV);
    });
  }
});

//TODO:
//Agregar middleware para identificar tipo de usuario
