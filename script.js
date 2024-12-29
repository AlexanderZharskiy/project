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


// let personalMovieDB = {
//     count: 0,
//     movies: {},
//     acrors:{},
//     genre: [],
//     private: false,
//     start: function(){
//       personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?').trim();
//       while(personalMovieDB.count == '' || personalMovieDB.count == null || 
//         isNaN(personalMovieDB.count)){
//         personalMovieDB.count = +prompt('СкольКо фильмов вы уже посмотрели?');
//       }
//     },
//     rememberMyFilms: function (){
//       for(let i = 0; i < 2; i++){
//       const a = prompt('Один из последних просмотренный фильмов'),
//     b = prompt('На сколько оцените его?');
    
//     if( a != null && b != null && a !='' && b !='' && a.length <= 50){
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//     }
//     else{
//       console.log('error')
//       i--;
//     }
//     }
//     },

//      detectPersonalLevel: function(){
//       if(personalMovieDB.count < 10){
//         document.write('Просмотрено довольно мало')
//       }else if(personalMovieDB.count >= 10 && personalMovieDB.count <=30){
//         document.write("Вы классический зритель")
//       }else if(personalMovieDB.count > 30){
//         document.write('Вы киноман')
//       }
//     },

//     showMyBD: function (){
//       if(!personalMovieDB.private){
//         console.log(personalMovieDB);
//       }
//     },

//      toggleVisibleMyDB: function(){
//      if(personalMovieDB.private){
//       personalMovieDB.private = false;
//      }
//      else{
//       personalMovieDB.private = true;
//      }
  
//     },

//     writeYourGenres: function (){
//       for(let i = 1; i <= 3; i++){
//         const a = prompt(`Ваш любимый жанр под номером ${i}`).trim();
//         if(a != null && a != ''){
//     personalMovieDB.genre[i - 1] = a;
//         }
//         else{
//           console.log('error')
//           i--;
//         }
//       }
    
//       personalMovieDB.genre.forEach(function(item, i){
//         console.log(`Любимый жанр ${i + 1} это  ${item}`)
    
//       });
    
//     }

// };

// let x = 5;
// alert(++x);

// let arr = [];
// arr + false;
// arr - null;
// arr = true;


// let y = 1;
// let x1 = y = 2;

// alert(x1);

// alert("1"[0]);

// let person = {
//   name: 'Artur',
//   lastName:'Nemirko',
//   nickName: 'Petuh',
//   maritalStatus: true,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function(){
//     console.log("test");
//   }
// }

// console.log(Object.keys(person).length);



// let arr = [];

// var count = 0;

// for(let i = 0; i < 10; i++){
//   count++;
//   arr.push(count);
// console.log(arr[i]);
// }


// arr.forEach(function(item, i , arr){
// console.log(`${i}: ${item}: внутри массива ${arr}`)
// });



// function copy(mainObj){
//   let objCopy = {}

//   let key;
//   for(key in mainObj)
//     objCopy[key] = mainObj[key];

//   return objCopy;
// }



// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x:7,
//     y:4
//   }
// };

// const newNumber = copy(numbers);

// newNumber.a = 10;

// console.log(numbers);
// console.log(newNumber);



//  +prompt((x , n) => {
//     let resut = 1;

//     for(let i = 1; i = n; i++){

//     }
// })


// function pow(x , n)  {
//     let resut = 1;

//     for(let i = 1; i <= n; i++){
//         resut *= x;
//     }

//     console.log(resut);
// }

// function pow(x , n){
//     if (n === 1){
//         return x;
//     }else{
//         return x * pow(x , n - 1);
//     }
// }


// pow(5,5);
// pow(6,6);
// pow(7,6);
// pow(8,6);
// pow(9,6);



// btn.addEventListener('click',()=>{
//     alert('Hello Man')
// })

// btn.addEventListener('mouseenter',()=>{
//     alert('Mouse at home Man')
// })

// btn.addEventListener('mouseenter',(e)=>{
// e.target.removeEventListener();
// })
// const deleteElement = (e) =>{
// console.log(e.target);
// }

// const btn = document.querySelectorAll('.button1');

// const deleteElement = (event) =>{
//     event.target.remove('click');
//     console.log("Deleted elemetnt", event.target)
//     }
    


// btn.forEach(item => {
//     item.addEventListener('click', deleteElement);
// });
// // btn.removeEventListener('click', deleteElement);


// const link = document.querySelector('a');


// link.addEventListener('click', (event) =>{
//     event.preventDefault();
//     console.log(event.target);
// })


// const salaries = {
//     john: 500,
//     ivan: 1000,
//     anna: 10000
// };


// salaries[Symbol.iterator] = function  (){
//     return{
//         currentSalary: this.john, // Начальная зарплата
//          maxSalary: this.anna,

//         next(){
//             if (this.currentSalary < this.maxSalary){
//                 this.currentSalary += 500;
//                 return{done: false, value:this.currentSalary}
//             }
//             else{
//                 return{done: true}
//             }
//         }
//     };
// };

// for(let res of salaries){
//     console.log(res);
// }

// const salaries = {
//     john: 500,
//     ivan: 1000,
//     anna: 10000
// };

// salaries[Symbol.iterator] = function () {
//     let currentSalary = this.john; // Начальная зарплата
//     const maxSalary = this.anna;  // Максимальная зарплата

//     return {
//         next() {
//             if (currentSalary < maxSalary) {
//                 currentSalary += 500; // Увеличиваем зарплату на 500
//                 return { done: false, value: currentSalary };
//             } else {
//                 return { done: true }; // Итерация завершена
//             }
//         }
//     };
// };

// for (let res of salaries) {
//     console.log(res); // 1000, 1500, 2000, ..., 10000
// }


const btn = document.querySelectorAll('button');

btn[0].addEventListener('click', (event)=>{
    console.dir(event.target);

});


