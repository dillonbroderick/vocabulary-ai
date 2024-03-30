const express = require('express')
const { 
    getAllWords,
    createNewWord
} = require('../controllers/WordController')

const wordRouter = express.Router()

wordRouter.get("/get-all-words", getAllWords);

wordRouter.post("/create-new-word", createNewWord);

module.exports = wordRouter