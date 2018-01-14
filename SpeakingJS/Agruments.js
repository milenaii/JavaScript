'use strict';

//arguments - it is not nessesary to tell how much are the arguments:

function logArgs() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(i + '. ' + arguments[i]);
    }
    console.log(arguments[0]);
    console.log(arguments[1]);   
}

console.log(logArgs('hello', 'world'));  // 0. hello
                                         // 1. world
                                         // undefined  - I am not sure from where is that !!   

