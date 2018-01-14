function findMaxKSum(params){
    let n = +params[0];
    let k = +params[1];

    let arr = [];

    for(let i = 0; i < params.length - 2 ; i++) {
        arr[i] = +params[i + 2];
        //console.log(arr[i]);
    }
    
    //selection sort

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[i]){    //swap
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    let maxKSum = 0;

    for(let i = arr.length - 1; i >= arr.length - k ; i--) {
        maxKSum += arr[i];
    }
    console.log(maxKSum);
    
}

findMaxKSum(['8','3','3','2','3','-2','5','4','2','7']);