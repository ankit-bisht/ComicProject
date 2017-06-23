// Load required packages
var mongoose = require('mongoose');

// Define our Comics Schema
var ComicRequestsSchema = new mongoose.Schema({
    username: { type: String, required: true },
    comicname: { type: String, required: true },
    requestdate: { type: Date, default: Date.now },
    requeststatus: { type: Number, required: true }
});

// Export the Mongoose model
module.exports = mongoose.model('Comicrequests', ComicRequestsSchema);
