const express = require('express')
const Word = require('../schemas/WordSchema')

const wordRouter = express.Router()

wordRouter.get("/get-all-words", (req, res) => {
    res.json({msg: "GET all words"})
});

wordRouter.post("/create-new-word", async (req, res) => {
    try {
        const word = await Word.create({
            "word": "test",
            "part_of_speech": "noun",
            "definition": "this is a test",
            "date": {
                "year": 2024,
                "month": 3,
                "day": 30
            }
        })
        res.status(200).json(word);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message});
    }

});

module.exports = wordRouter