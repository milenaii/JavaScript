'use strict';

//func(arg1, arg2, arg3)

//now with apply:

//func.apply(null, [arg1, arg2, arg3])            null is for OOP

//ex

console.log(Math.max(17, 33, 2));  // 33

console.log(Math.max.apply(null, [17, 33, 2])); // 33

let array = [17, 33, 2];

console.log(Math.max.apply(null, array));   // 33

