function printNotDivisibleNumbersToN(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        if (i % 3 !== 0 && i % 7 !== 0) {
              result += i + ' ';
        }
    }
    console.log(result.trim());
}

printNotDivisibleNumbersToN(5)