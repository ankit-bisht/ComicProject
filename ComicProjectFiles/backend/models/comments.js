
// Load required packages
var mongoose = require('mongoose');

// Define our Comics Schema
var CommentsSchema = new mongoose.Schema({
    username: { type: String, required: true },
    comment: { type: String, required: true },
    comicID: { type: String, required: true }
});

// Export the Mongoose model
module.exports = mongoose.model('Comment', CommentsSchema);
