const mongoose = require('mongoose');

const phraseSchema = new mongoose.Schema({
    phrase: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Phrase', phraseSchema);