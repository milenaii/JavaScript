function printNumsFrom1toN(param){
    let num = +param;
    let result = [];
    for (let i = 1; i <= num; i++){
       result[i-1] = i;
    }  
    console.log(result.join(' '));
}
//printNumsFrom1toN(['5']);