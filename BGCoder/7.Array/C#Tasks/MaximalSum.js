function findMaxSum(args){
    let n = + args[0];
    let arr = [];

    for(let i = 0; i < args.length - 1; i++) {
        arr[i] =  +args[i + 1];  
    }
    //console.log(arr);
    
    let sum = Number.MIN_VALUE;
    let maxSum = Number.MIN_VALUE; 

    for(let i = 0; i < n; i++) {
        sum = arr[i];

        for(let j = i + 1; j < arr.length; j++) {
            sum += arr[j];    
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    console.log(maxSum);
    
}

findMaxSum (['10','2','3','-6','-1','2','-1','6','4','-8','8']);