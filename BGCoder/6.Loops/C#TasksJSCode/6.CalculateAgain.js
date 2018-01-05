function calculateAgain(n, k) {
 
    let result = 1;

    for (let i = k + 1; i <= n; i++) {
        result *= i;
    }
    console.log(result);
}
calculateAgain(8,3);
