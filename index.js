const express = require('express');
const config = require('./config/config');
const authJwt = require('./middlewares/authJwt');

const app = express();

app.get('/',authJwt.ensureAuth,(req, res) => res.send('Hello World!'));

app.listen(config.serverPort, function(){
  console.log('Server ON, port:', config.serverPort);
  console.log('The environment is', process.env.NODE_ENV);
});
