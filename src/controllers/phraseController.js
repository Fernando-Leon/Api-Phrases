const Phrase = require('../models/phrase');

// Create phrase

async function createPhrase(req, res) {
    const { phrase, author } = req.body;

    try {
        const newPhrase = new Phrase({ phrase, author });
        const savedPhrase = await newPhrase.save();

        res.status(201).json(savedPhrase);
    } catch ( e ) {
        res.status(400).json({ message: e.message });
    }

}

// Get all phrases

async function getAllPhrases(req, res) {
    try {
        const phrases = await Phrase.find();
        res.json(phrases);
    } catch(e) {
        res.json({message: e});
    }
}

// Get phrase for object id

async function getPhrase(req, res) {
    const { id } = req.params;
    try {
        const phrase = await Phrase.findById(id);
        res.json(phrase);
    } catch (e) {
        res.json({ message: e });
    }
}

// Put phrase

async function putPhrase(req, res) {
    const { id } = req.params;
    const { phrase, author } = req.body;
    try {
        const updatedPhrase = await Phrase.updateOne( { _id: id }, { $set: { phrase, author } });
        res.json(updatedPhrase);
    } catch (e) {
        res.json({ message: e });
    }
}

// Delete Phrase

async function deletePhrase(req, res) {
    const { id } = req.params;
    try {
        const removedPhrase = await Phrase.deleteOne( { _id: id });
        res.json(removedPhrase);
    } catch (e) {
        res.json({ message: e });
    }   
}

module.exports = {
    createPhrase,
    getAllPhrases,
    getPhrase,
    putPhrase,
    deletePhrase
}