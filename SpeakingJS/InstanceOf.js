'use strict';

// instanceOf checks whether an objects is an instance of a GIVEN CONSTRUCTOR

console.log({} instanceof Object);   // true

console.log([] instanceof Object);  // true

console.log([] instanceof Array);   // true



console.log(undefined instanceof Object);   //false

console.log(null instanceof Object);    //false


// all primitive

console.log('abc' instanceof Object);    //false
console.log(123 instanceof Object);    //false
