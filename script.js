'use strict';

var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;

// console.log(leftBorderWidth);

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);


let person = {
    name:"John",
    age: 25,
    isMarried: false
};

person.male = "Man"

if(person.isMarried === false){
    console.log("Not MArried")
}
else{
    console.log("Ess his Married")
}

console.log(person.age);
console.log(person.name);
console.log(person.isMarried);
console.log(person.male);

console.log(person["age"]);
console.log(person["name"]);
console.log(person['isMarried']);

let array = ['plum.png','orange.jpg','apple.bmp'];

console.log(array[1]);

// alert("Hello world");

// let answer = confirm("Are you here?");

// console.log(answer);

// let answer = prompt("Есть вам 18 лет??" );

// console.log(typeof(answer));

// console.log("arr -" + " object");

let incr = 10,
    decr = 10;

    // incr++;
    // decr--;


    console.log(++incr);
    console.log(--decr);

    console.log(5%2);

    console.log("2" == 2);
    console.log("2" === 2);

    let isChacked = true,
    isClose = true;

    console.log(isChacked && isClose);

    let issChacked = true,
    issClose = false;

    console.log(issChacked && issClose);

    let notChacked = false,
    notClose = false;

    console.log(notChacked || !notClose)


    let answear = [];
    answear[0] = prompt("Как ваше имя?" ,"");
    answear[1] = prompt("Как ваша фамилия?", "");
    answear[2] = prompt("Сколько вам лет?", "");

    document.write(answear);
