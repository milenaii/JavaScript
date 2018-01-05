function solve(args) {
    let inputArr = args;
    let nums = [];

    for(i = 0; i < inputArr.length; i ++){
        nums[i] = + inputArr[i];
    }

    let evenProduct = 1;
    let oddProduct = 1;

    for (i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            evenProduct *= nums[i];
        }
        else {
            oddProduct *= nums[i];
        }
    }

    if (evenProduct === oddProduct) {
        console.log("yes " + evenProduct);
    } else {
        console.log('no ' + oddProduct + ' ' + evenProduct);
    }
}
solve(['4', '3', '2', '5', '2']);

