const Word = require('../schemas/WordSchema')

const getAllWords = async (req, res) => {
    try {
        const words = await Word.find();
        res.status(200).json(words);
    } catch (error) {
        console.error(error);
        res.status(500).send("Could not retrieve words");
    }
}

const createNewWord = async (req, res) => {
    try {
        const word = await Word.create({
            "word": "test",
            "part_of_speech": "noun",
            "definition": "this is a test",
            "date": {
                "year": 2025,
                "month": 2,
                "day": 24
            }
        })
        res.status(200).json(word);
    } catch (error) {
        console.error(error);
        res.status(500).send("Could not create new word");
    }
}

module.exports = {
    getAllWords,
    createNewWord
}