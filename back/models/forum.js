const mongoose = require('mongoose');

const forumSchema = mongoose.Schema({
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    seenBy: { type: [String], required: true },
});

module.exports = mongoose.model('Forum', forumSchema);