import requests
import time
import os
from bs4 import BeautifulSoup
from datetime import date
from openai import OpenAI
from dotenv import load_dotenv

def generate_word_of_day(new_word):
    now = date.today()
    year = int(now.strftime("%Y"))
    month = int(now.strftime("%m"))
    day = int(now.strftime("%d"))

    curr_word_of_day = requests.get("http://localhost:4000/api/words/get-word-of-day").json()
    if curr_word_of_day["word"] == new_word:
        print("Word of day has not changed")
        return

    prev_word_doc = requests.patch("http://localhost:4000/api/words/demote-word-of-day")
    new_word_json = requests.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + new_word).json()[0]
    part_of_speech = new_word_json["meanings"][0]["partOfSpeech"]
    definition = new_word_json["meanings"][0]["definitions"][0]["definition"]

    joke_query = "Write a short joke that uses and involves the word '" + new_word + "'. This joke should help the user remember the word '" + new_word + "' and its meaning, but it shouldn't necessarily just give the definition of the word in the joke. The part of speech being used is '" + part_of_speech + "', and the definition being used is '" + definition + "'."
    joke_completion = client.chat.completions.create(
        model = "gpt-3.5-turbo",
        messages = [
            {"role": "system", "content": "You are a witty and clever assistant who is an expert on words and wordplay. Your users are trying to learn new vocabulary words, and to help them with this, you must come up with jokes, poems, and other contextualizing content for each of these words."},
            {"role": "user", "content": joke_query}
        ]
    )
    joke = joke_completion.choices[0].message.content

    poem_query = "Write a short poem, only a few lines, that uses and involves the word '" + new_word + "'. This poem should help the user remember the word '" + new_word + "' and its meaning. Consider different styles of poetry and decide on which style will most effectively use the word. Styles to consider are Shakespeare, Dr. Seuss, Edgar Allen Poe, Emily Dickinson; this list is not exhaustive. The part of speech being used is '" + part_of_speech + "', and the definition being used is '" + definition + "'."
    poem_completion = client.chat.completions.create(
        model = "gpt-3.5-turbo",
        messages = [
            {"role": "system", "content": "You are a witty and clever assistant who is an expert on words and wordplay. Your users are trying to learn new vocabulary words, and to help them with this, you must come up with jokes, poems, and other contextualizing content for each of these words."},
            {"role": "user", "content": poem_query}
        ]
    )
    poem = poem_completion.choices[0].message.content

    new_word_doc = requests.post("http://localhost:4000/api/words/create-new-word", json={
        "word": new_word,
        "part_of_speech": part_of_speech,
        "definition": definition,
        "date": {
            "year": year,
            "month": month,
            "day": day
        },
        "is_word_of_day": True,
        "joke": joke,
        "poem": poem
    })

    prev_word = new_word


prev_word = "none"
load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

while 1:

    URL = "https://www.merriam-webster.com/word-of-the-day"
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")

    new_word = soup.find("h2", {"class": "word-header-txt"}).text

    if new_word != prev_word:
        generate_word_of_day(new_word)
    
    time.sleep(300)


