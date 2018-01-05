function calculate(n, x) {

    let tmp = 1;
    let sum = 1;

    for (let i = 1; i <= n; i++) {
        tmp *= i / x;
        sum += tmp;
    }
    console.log(sum.toFixed(5));
}
calculate(4,3)