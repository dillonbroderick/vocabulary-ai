import requests
import time
from bs4 import BeautifulSoup
from datetime import date

def generate_word_of_day(new_word):
    now = date.today()
    year = int(now.strftime("%Y"))
    month = int(now.strftime("%m"))
    day = int(now.strftime("%d"))

    prev_word_doc = requests.patch("http://localhost:4000/api/words/demote-word-of-day")
    new_word_doc = requests.post("http://localhost:4000/api/words/create-new-word", json={
        "word": new_word,
        "part_of_speech": "noun",
        "definition": "test",
        "date": {
            "year": year,
            "month": month,
            "day": day
        },
        "is_word_of_day": True
    })

    prev_word = new_word


prev_word = "none"

while 1:

    URL = "https://www.merriam-webster.com/word-of-the-day"
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")

    new_word = soup.find("h2", {"class": "word-header-txt"}).text

    if new_word != prev_word:
        generate_word_of_day(new_word)
    
    time.sleep(300)


