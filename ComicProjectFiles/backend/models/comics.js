// Load required packages
var mongoose = require('mongoose');

// Define our Comics Schema
var ComicsSchema = new mongoose.Schema({
    name: {type: String},
    image: {type: String},
    story: {type: String},
    createddate: {type: Date, default: Date.now},
    updateddate: {Date}
});

// Export the Mongoose model
module.exports = mongoose.model('Comics', ComicsSchema);
