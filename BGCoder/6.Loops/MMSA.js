function findMMSA(params) {
    let inputArray = params;
    let numArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        numArray[i] = +inputArray[i];
    }

    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let sum = 0;

    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] <= min){
            min = numArray[i];
        }
        if(numArray[i] >= max){
            max = numArray[i];
        }
        sum += numArray[i];
    }

    let averageNums = sum / numArray.length;
    //console.log(inputArray.join(' '));
    console.log('min=' + min.toFixed(2))
    console.log('max=' + max.toFixed(2))
    console.log('sum=' + sum.toFixed(2))
    console.log('avg=' + averageNums.toFixed(2))
    
}
//findMMSA(['2', '-1', '4'])