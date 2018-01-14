'use strict';

function compareArrays(params) {
    let n = +params[0];

    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < n; i++) {
        arr1[i] = +params[i + 1];
    }
    for (let i = 0; i < n; i++) {
        arr2[i] = +params[i + 1 + n];
    }
    //console.log(arr1);
    //console.log(arr2);

    //compare arrays
    let areSame = true;

    for(let i = 0; i < n; i++) {
        if (arr1[i] !== arr2[i]) {
            areSame = false;
            break;
        }else{
            continue;
        }
    }
    console.log(areSame);
    
}

compareArrays(['3', '1', '2', '3', '1', '2', '5']);
