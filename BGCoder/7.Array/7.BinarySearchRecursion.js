//'use strict';
//Recursion
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

    
    binSearchRec(arr, searchedNum,  minIndex, maxIndex);
    
    function binSearchRec(arr, searN, minIndex, maxIndex) {
        let pivotIndex = Math.round((minIndex + maxIndex) / 2);

        if (searchedNum === arr[pivotIndex]) {
            result = pivotIndex;
            return result;
        } else if (searchedNum > arr[pivotIndex]) {
            minIndex = pivotIndex;
            binSearchRec(arr, searchedNum,  minIndex, maxIndex);
        } else {
            maxIndex = pivotIndex;
            binSearchRec(arr, searchedNum,  minIndex, maxIndex);
        }
    }
    return result;
}
console.log(binarySearch(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']));
