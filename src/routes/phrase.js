const express = require('express');
const router = express.Router();
const phraseController = require('../controllers/phraseController');

router.post("/phrases", phraseController.createPhrase);
router.get("/phrases", phraseController.getAllPhrases);
router.get("/phrases/:id", phraseController.getPhrase);
router.put("/phrases/:id", phraseController.putPhrase);
router.delete("/phrases/:id", phraseController.deletePhrase);

module.exports = router;