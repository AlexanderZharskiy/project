"use strict";

const numberOfFilms = +prompt('Скольо фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    acrors:{},
    genre: [],
    private: false
};

const a ='Один из последних просмотренный фильмов',
b = 'На сколько оцените его?',
c = 'Один из последних просмотренный фильмов?',
d = 'На сколько оцените его?';

let arr = [a, b, c, d];
for(let i = 0; i < arr.length;i++){
prompt(arr[i])
}
