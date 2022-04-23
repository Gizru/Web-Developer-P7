const mongoose = require('mongoose');

const memesSchema = mongoose.Schema({
    userId: { type: String, required: true },
    fullName: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    seenBy: { type: [String], required: true },
});

module.exports = mongoose.model('Memes', memesSchema);