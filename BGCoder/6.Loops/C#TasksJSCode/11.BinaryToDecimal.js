function binaryToDecimal(param){
    
    let input = param;
   
    let result = 0;
    let power = 0;

    for(i = input.length - 1; i >= 0; i-- ){
        let tmp = +input[i]*(Math.pow(2,power));
        power++;
        result += tmp;
    }
    console.log(result) 
}
binaryToDecimal('1110000110000101100101000000');