'use strict';
/* if you pass a variable to
a function, its value is copied and handed to the function (pass by value). Therefore,
the function can’t change the variable. */


function incRef(numberRef) {
    numberRef++;
    console.log(numberRef);   // 8
}
let n = 7;                   
incRef(n);
console.log(n);               // 7  -> out of the funcq value is not changed


/*  If you need to change the variable, you must wrap the value of
the variable in an array:*/ 


function inc(numberRef) {
    numberRef[0]++;
    console.log(numberRef[0]);   // 8
}
     var nn = [7];
    inc(nn);
    console.log(nn[0]);           // 8