function reverseString(someString) {
    let reverseStr = '';
    for (i = someString.length - 1; i >= 0; i--){
        reverseStr  +=someString[i];    
    }
    console.log(reverseStr);
}

reverseString('mimi');