// Load required packages
var mongoose = require('mongoose');

// Define our Series schema
var SeriesSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    createddate: {type: Date, default: Date.now},
    updatedate: {Date},
    createdby: {type: String}
});

// Export the Mongoose model
module.exports = mongoose.model('Series', SeriesSchema);
