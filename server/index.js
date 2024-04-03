require('dotenv').config()

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const wordRouter = require("./routers/WordRouter");

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/api/words', wordRouter);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.error(error)
    });

