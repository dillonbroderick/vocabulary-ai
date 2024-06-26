import './Home.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [wordOfDay, setWordOfDay] = useState(null);

    useEffect(() => {
        axios.defaults.baseURL = 'http://localhost:4000';
        axios
            .get('/api/words/get-word-of-day')
            .then(res => {
                setWordOfDay(res.data);
            })
            .catch(res => {
                console.log("error");
            })
    }, []);


    return (
        <>
            <div class="container">
                <div class="c1">
                    <div class="type-title">
                        today's word is:
                    </div>
                </div>
                <br></br>
                <div class="c2">
                    <p class="type-word">
                        { wordOfDay ? wordOfDay.word : "abhorrent" }
                    </p>
                </div>
                <div class="fade-in">
                        { wordOfDay ? wordOfDay.part_of_speech + ": " + wordOfDay.definition : ""}
                        <p>
                            { wordOfDay ? "joke: " + wordOfDay.joke : "joke: "}
                        </p>

                        { wordOfDay ? "poem: " + wordOfDay.poem : "poem: "}
                </div>
            </div>
        </>
    );
}

export default Home;