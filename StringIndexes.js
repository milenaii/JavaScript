function printEvenOddIndexes(args) {
    let input = args;

    let resEven = '';
    let resOdd = '';

    for (i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            resEven += input[i].toString();
        }
        else {
            resOdd += input[i].toString();
        }
    }
    let res = resEven +' ' + resOdd;
    console.log(res);

}
printEvenOddIndexes('Hacker')

