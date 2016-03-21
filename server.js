// require express so that we can build the app
var express = require('express');
var path = require('path');

var app = express(); 
var bodyParser = require('body-parser');
//returns middleware that only parses json 
app.use(bodyParser.json());

//use static file in path 
app.use(express.static(path.join(__dirname, './client')));
//config routes and database 
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// binds and listens for connections on the specified host and port 
app.listen(3000, function(){
  console.log('Name Api app running on port 3000')
});