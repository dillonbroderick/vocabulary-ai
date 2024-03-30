CREATE DATABASE vocabai;

CREATE TABLE words(
    word text PRIMARY KEY,
    definition text,
    part_of_speech text,
    month int,
    day int,
    year int
);