//'use strict';
function allocateArray(arg){
    let n = +arg[0];
    let resArray = [];
    for(let i = 0; i < n; i++) {
        resArray[i] = i*5;
    }
    console.log(resArray.join('\n'));
}

//allocateArray(['5']);
