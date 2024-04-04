import requests
import time
from datetime import date

def generate_word_of_day():
    continue


while 1:
    print("iteration")
    response = requests.get('http://localhost:4000/api/words/get-word-of-day')
    response = response.json()

    now = date.today()
    year = now.strftime("%Y")
    month = now.strftime("%m")
    day = now.strftime("%d")
    
    if year > response.date.year:
        generate_word_of_day()
    elif month > response.date.month:
        generate_word_of_day()
    elif day > response.date.day:
        generate_word_of_day()
    
    time.sleep(300)


