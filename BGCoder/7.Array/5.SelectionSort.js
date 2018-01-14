function selectionSort(params) {
    let input = params;
    let n = input[0];
    //let result = input.slice(1);
    let result = [];
    for(let i = 0; i < input.length - 1 ; i++) {
        result[i] = +input[i + 1];
    }

    //console.log(result.join(','));

    for(let i = 0; i < result.length; i++) {
        for(let j = i + 1; j < result.length; j++) {
            if(result[j] < result[i]){    //swap
                let tmp = result[i];
                result[i] = result[j];
                result[j] = tmp;
            }
        }
    }
    for(let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
    
}

selectionSort(['5','2', '3', '1','8','5']);