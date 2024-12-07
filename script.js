"use strict";

// let star = "*";
// for(let i = 1; i < 10;i++){
//   console.log(star)
//   // document.write(star)
//   star += "*"
// }
// console.log();

// let star1 = "*";
// for(let i = 0; i < 1; i++){
//   for(let j = 1; j < 10; j++){
//     console.log(star1);
//     star1 += "*";
//   }
// }

// for (var i = 1; i <= 50; i++) {
//   document.write(i + '<br>');
//   }

//   let arr = [1,2,3,4,5];

//   for(let i = 0; i < arr.length; i++){
//     document.write(arr[i]);
//   }
  

//   let arr1 = [1,2,3,4,5];
//   let result = 1;

//   for(let i = 0; i < arr.length; i++){
//     result = result * arr[i];
//   }

//   alert(result)

let numberOfFilms;

function start(){
  numberOfFilms = +prompt('Скольо фильмов вы уже посмотрели?');
  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Скольо фильмов вы уже посмотрели?');
  }

}

start();
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    acrors:{},
    genre: [],
    private: false
};









function rememberMyFilms(){
  for(let i = 0; i < 2; i++){
  const a = prompt('Один из последних просмотренный фильмов'),
b = prompt('На сколько оцените его?');

if( a != null && b != null && a !='' && b !='' && a.length <= 50){
personalMovieDB.movies[a] = b;
console.log('done');
}
else{
  console.log('error')
  i--;
}

}
}

// rememberMyFilms();

function detectPersonalLevel(){
  if(personalMovieDB.count < 10){
    document.write('Просмотрено довольно мало')
  }else if(personalMovieDB.count >= 10 && personalMovieDB.count <=30){
    document.write("Вы классический зритель")
  }else if(personalMovieDB.count > 30){
    document.write('Вы киноман')
  }
}

// detectPersonalLevel();

function showMyBD(){
  if(!personalMovieDB.private){
    console.log(personalMovieDB);
  }
}

showMyBD();


function writeYourGenres(){
  for(let i = 1; i <= 3; i++){

personalMovieDB.genre[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }

}

writeYourGenres();

