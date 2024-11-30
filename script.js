"use strict";

let star = "*";
for(let i = 1; i < 10;i++){
  console.log(star)
  // document.write(star)
  star += "*"
}
console.log();

let star1 = "*";
for(let i = 0; i < 1; i++){
  for(let j = 1; j < 10; j++){
    console.log(star1);
    star1 += "*";
  }
}

for (var i = 1; i <= 50; i++) {
  document.write(i + '<br>');
  }

  let arr = [1,2,3,4,5];

  for(let i = 0; i < arr.length; i++){
    document.write(arr[i]);
  }
  

  let arr1 = [1,2,3,4,5];
  let result = 1;

  for(let i = 0; i < arr.length; i++){
    result = result * arr[i];
  }

  alert(result)