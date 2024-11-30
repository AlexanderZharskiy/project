"use strict";

if(4 == 9){
  console.log("Ok")
}else {
  console.log("Error")

}

const num = 50;

if(num < 48){
  console.log("ННеверно")
}else if(num > 100){
  console,log("Снова не верно")
}else{
  console.log("True")
}

(num == 50) ? console.log("True") : console.log("False");

const numb = 50;

switch(numb){  // Проверка на строгое соответствие
  case 49:
    console.log("false")
    break;
    case 100:
    console.log("Not now")
    break;
    case 50:
      console.log("True")
      break;
      default:
        console.log("default")
        break;

}