function findFrequentNumber(params) {

    let n = + params[0];
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr[i] = params[i + 1];
        //console.log(arr[i]);
    }

    let count = 1;
    let maxCount = 0;
    // let num;
    let maxNum;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
                if (count > maxCount) {
                    maxCount = count;
                    maxNum = arr[i];
                }
            }
        }
        count = 1;
    }
    console.log(maxNum + ' (' + maxCount + ' times)');

    //REPEATING_NUMBER (REPEATED_TIMES times)
}


findFrequentNumber(['8', '2', '2', '1', '2', '5', '2', '5', '2']); 
