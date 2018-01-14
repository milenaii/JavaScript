function binarySearch(args) {
    let arrLgh = +args[0];
    let searchedNum = +args[args.length - 1];

    let arr = [];
    for (let i = 0; i < args.length - 2; i++) {
        arr[i] = +args[i + 1];
        //console.log(arr[i]);    
    }

    let result;
    let minIndex = 0;
    let maxIndex = arr.length - 1;
    while (true) {
        let pivotIndex = Math.round((minIndex + maxIndex) / 2);
        if (searchedNum === arr[pivotIndex]) {
            result = pivotIndex;
            break;
        } else if (searchedNum > arr[pivotIndex]) {
            minIndex = pivotIndex;
        } else{
            maxIndex = pivotIndex;  
        }
    }
    console.log(result);
}

binarySearch(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);