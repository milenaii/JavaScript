function decimalToBinary(param) {
    let num = + param;
    let result = '';
    while (num !== 0) {
        if (num % 2 === 0) {
            result += 0;
        }
        else {
            result += 1;
        }
        num = Math.floor(num / 2);
    }
  //  console.log(result);
  reverseString(result);
}

decimalToBinary(43691);

function reverseString(someString) {
    let reverseStr = '';
    for (i = someString.length - 1; i >= 0; i--){
        reverseStr  +=someString[i];    
    }
    console.log(reverseStr);
}

//reverseString('mimi');