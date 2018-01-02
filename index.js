const express = require('express');
const config = require('./config/config');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(config.serverPort, function(){
  console.log('Server ON, port:', config.serverPort);
  console.log('The environment is', process.env.NODE_ENV);
});
