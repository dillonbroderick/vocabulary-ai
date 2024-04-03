import './Home.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [wordOfDay, setWordOfDay] = useState(null);
    const [animationFinished, setAnimationFinished] = useState(false);

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

    const handleAnimationEnd = () => {
        setAnimationFinished(true);
    };

    return (
        <>
            <div class="typed-out-title" onAnimationEnd={handleAnimationEnd}>today's word is:</div>
            { animationFinished && (
                <div class="typed-out-word">
                    { wordOfDay ? wordOfDay.word : "NO WORD OF DAY TODAY" }
                </div>
            )}
        </>
    );
}

export default Home;