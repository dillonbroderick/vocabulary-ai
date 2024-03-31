const Word = require('../schemas/WordSchema')
const mongoose = require('mongoose')

const updateWordOfDay = async (req, res) => {
    try {
        prev_word_of_day = await Word.findOneAndUpdate(
                { "is_word_of_day": true },
                { "$set": { "is_word_of_day": false } }
            );

        new_word_of_day = await Word.findOneAndUpdate(
                { "_id": new_word._id },
                { "$set": { "is_word_of_day": true } }
            );
            
        res.status(200).json(new_word_of_day);
    } catch (error) {
        console.log(error);
        res.status(500).send("Could not update word of the day");
    }
}

const getWordOfDay = async (req, res) => {
    try {
        const wordOfDay = await Word.findOne({ "is_word_of_day": true });
        if (!wordOfDay) {
            console.log("Word of the day does not exist");
            return res.status(500).send("Word of the day does not exist");
        }
        res.status(200).json(wordOfDay);
    } catch (error) {
        console.log(error);
        res.status(500).send("Could not get word of the day");
    }
}

const getAllWords = async (req, res) => {
    try {
        const words = await Word.find();
        res.status(200).json(words);
    } catch (error) {
        console.log(error);
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
            },
            "is_word_of_day": false
        })
        res.status(200).json(word);
    } catch (error) {
        console.log(error);
        res.status(500).send("Could not create new word");
    }
}

module.exports = {
    updateWordOfDay,
    getWordOfDay,
    getAllWords,
    createNewWord
}