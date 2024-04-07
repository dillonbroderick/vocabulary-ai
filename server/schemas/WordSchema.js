const mongoose = require("mongoose");
const internal = require("stream");

const Schema = mongoose.Schema;

const wordSchema = new Schema({
    word: {
        type: String,
        required: true
    },
    part_of_speech: {
        type: String,
        enum: ['noun', 'adjective', 'verb'],
        required: true
    },
    definition: {
        type: String,
        required: true
    },
    date: {
        year: {
            type: Number,
            required: true
        },
        month: {
            type: Number,
            required: true
        },
        day: {
            type: Number,
            required: true
        }
    },
    is_word_of_day: {
        type: Boolean,
        required: true
    },
    joke: {
        type: String,
        required: true
    },
    poem: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Word', wordSchema);