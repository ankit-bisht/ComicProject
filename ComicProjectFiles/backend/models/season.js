// Load required packages
var mongoose = require('mongoose');

// Define our Season schema
var SeasonSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    startson: {type: String},
    endson: {type: String},
    createddate: {type: Date, default: Date.now},
    updateddate: {Date}
});

// Export the Mongoose model
module.exports = mongoose.model('Season', SeasonSchema);
