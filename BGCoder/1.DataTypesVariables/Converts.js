'use strict';

// I   parseInt 

let some = '5';
console.log(typeof some);

let num = parseInt(some);
console.log(parseInt(some));
console.log(num);
console.log(typeof(num));

//parseInt  - parsva do kudeto moje

let other = '15484lkj';
console.log(parseInt(other));  //15484

//  II  NUmber() - dava Nan

console.log(Number(other));    //Nan


//  III   +

console.log(+some);

// IV  parseFloat && parseInt

let numb = '3.25';

console.log(parseFloat(numb));
console.log(parseInt(numb));


let nummm = 3.22222;
console.log(parseInt(nummm));