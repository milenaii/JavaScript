'use strict';

let str = 'a, b,c, d';
//split witout separator:
console.log(str.split());  //["a, b,c, d"]


//split ','
console.log('a, b,c, d'.split(',')); // ["a", " b", "c", " d"]

// the same -> regex /,/
console.log('a, b,c, d'.split(/,/)); // ["a", " b", "c", " d"]

// regex  /, */
console.log('a, b,c, d'.split(/, */)); // [ 'a', 'b', 'c', 'd' ]

//regex, only 2 symbols
console.log('a, b,c, d'.split(/, */, 2)); // [ 'a', 'b' ]

