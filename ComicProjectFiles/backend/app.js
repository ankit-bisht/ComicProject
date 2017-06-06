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

app.use(bodyParser.json());
// app.use(expressJWT({secret:'kellton'}).unless({path:['/api/v1/comic']}));
routes = require('./routes/index');
app.use('/api', routes);

// Defining Port
var port = process.env.PORT || 3003;

// To Start node server
app.listen(port);
console.log('Insert Test on port ' + port);
