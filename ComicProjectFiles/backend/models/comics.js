// Load required packages
var mongoose = require('mongoose');

// Define our Comics Schema
var ComicsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    story: {type: String, required: true},
    createddate: {type: Date, default: Date.now},
    updateddate: {Date}
});

// Export the Mongoose model
module.exports = mongoose.model('Comics', ComicsSchema);
