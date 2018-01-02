const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');

mongoose.Promise = global.Promise;

require('./models/User');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

require('./routes/authRoutes')(app);

mongoose.connect(config.mongodbHost.concat(config.dbName), {} , (err, res) => {
  if(err){
    throw err;
  }else{
    console.log('Mongo conection OK');

    app.listen(config.serverPort, function(){
      console.log('Server ON, port:', config.serverPort);
      console.log('The environment is', process.env.NODE_ENV);
    });

  }
});
