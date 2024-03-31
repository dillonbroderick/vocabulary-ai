const express = require('express')
const {
    updateWordOfDay,
    getWordOfDay,
    getAllWords,
    createNewWord
} = require('../controllers/WordController')

const wordRouter = express.Router()

wordRouter.patch("/set-word-of-day", updateWordOfDay);

wordRouter.get("/get-word-of-day", getWordOfDay);

wordRouter.get("/get-all-words", getAllWords);

wordRouter.post("/create-new-word", createNewWord);

module.exports = wordRouter