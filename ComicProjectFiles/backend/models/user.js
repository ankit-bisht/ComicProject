// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    email:{type: String, required: true},
    code:{type: String, required:true},
    // subscription:{type: String, required:true},
    verification:{type: Number, required: true},
    usertype: {type: Number, required: true},
    updateddate: {type: Date, default: Date.now}
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);
