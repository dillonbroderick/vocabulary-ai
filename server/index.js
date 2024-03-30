const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// ROUTES //

// create new word
app.post("/new-word", async(req, res) => {
    try {

        const newWord = await pool.query(`
                INSERT INTO words (word, definition, part_of_speech, month, day, year)
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING *;
            `,
            ["test", "this is a test", "noun", 1, 1, 1]
            );
        res.json(newWord);
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5001, () => {
    console.log("server has started on port 5001");
});