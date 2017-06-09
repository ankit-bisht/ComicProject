// Required Packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var jwt = require('jsonwebtoken');
// var expressJWT = require('express-jwt');

// Connection to MongoDB
mongoose.connect('mongodb://localhost:27017/ComicProjectDatabase');

// Create Express application
var app = module.exports = express();
//app modetype
var NODE_ENV = 'development';
//Setting Variables
app.set('env', process.env.NODE_ENV || 'production');

app.use(bodyParser.urlencoded({ extended: true }));

// Add headers
app.use(function (req, res, next) {    // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);    // Pass to next layer of middleware
   next();
 });

app.use(bodyParser.json());
// app.use(expressJWT({secret:'kellton'}).unless({path:['/api/v1/comic']}));
routes = require('./routes/index');
app.use('/api', routes);

// Defining Port
var port = process.env.PORT || 3003;

// To Start node server
app.listen(port);
console.log('Insert Test on port ' + port);
