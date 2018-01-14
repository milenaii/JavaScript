'use strict';

// Number -> number

console.log(Number('123'));

console.log(typeof Number('123')); //number
console.log(typeof Number(3));   // number


//new Number() -> obj

let n = new Number(5);
console.log(typeof n); //object

// object Number props:

console.log(Number.MAX_VALUE);   // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);      // 5e-324
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY);  // Infinity


//  !!!
//Al
console.log((0.0000003).toFixed(10));  // 0.0000003000
console.log((0.0000003).toString());  // 3e-7

console.log((1234).toPrecision(3)); // 1.23e+3
console.log((1234).toPrecision(5)); // 1234.0

console.log((15).toString(2));   // 1111
console.log((65535).toString(16)); // ffff


console.log((1234567890).toString(36));  // kf12oi
console.log(parseInt('kf12oi', 36));   // 1234567890


console.log((123).toExponential(5));  // 1.23000e+2
