require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

require('./models/User');
require('./models/Project');
require('./models/Stage');
require('./models/Review');
require('./models/Galery');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, auth, id'
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/authRoutes')(app);
require('./routes/clientRoutes')(app);
require('./routes/projectRoutes')(app);
require('./routes/galeryRoutes')(app);
require('./routes/auxiliarRoutes')(app);


app.use(express.static('client/build'));

//Bypass de API
const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

mongoose.connect(process.env.MONGODBURL.concat(process.env.DBNAME), {}, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Mongo conection OK');

    app.listen(process.env.SERVERPORT, () => {
      console.log('Server ON, port:', process.env.SERVERPORT);
      console.log('The environment is', process.env.NODE_ENV);
    });
  }
});
