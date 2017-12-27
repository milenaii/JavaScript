function isPrime(arg) {
    let num = +arg[0];
    let isPrime;
    if (num <= 1) {
        isPrime = false;
    }
    else if (num === 2 || num === 3 || num === 5 || num === 7) {
        isPrime = true;
    }
    else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if((num % i) === 0){
                console.log("false");
                break;
            }
            else if ((num % i) !== 0){  
               continue;
                
            }
        }
    }
}

isPrime(['23'])