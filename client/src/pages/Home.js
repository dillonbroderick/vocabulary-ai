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

            //<div class="typed-out-title" onAnimationEnd={handleAnimationEnd}>today's word is:</div>

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
                    <div class="type-word">
                        { wordOfDay ? wordOfDay.word : "NO WORD OF DAY TODAY" }
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;