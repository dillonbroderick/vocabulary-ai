const express = require('express')
const {
    promoteWordOfDay,
    demoteWordOfDay,
    updateWordOfDay,
    getWordOfDay,
    getAllWords,
    createNewWord
} = require('../controllers/WordController')

const wordRouter = express.Router();

wordRouter.patch("/promote-word-of-day", promoteWordOfDay);

wordRouter.patch("/demote-word-of-day", demoteWordOfDay);

wordRouter.get("/get-word-of-day", getWordOfDay);

wordRouter.get("/get-all-words", getAllWords);

wordRouter.post("/create-new-word", createNewWord);

module.exports = wordRouter