function isThirdDigit7(arg){

    let th = arg / 100;
    let thirdDigit = Math.floor(th % 10);
    
    if (thirdDigit === 7) {
        console.log(true)
    } else {
        console.log(false +' ' + thirdDigit);
    }
}

// isThirdDigit7(['7072'])
