function findTheBiggestOfThree(args) {
    let firstNum = + args[0],
        secondNum = + args[1],
        thirdNum = +args[2];

    if (firstNum >= secondNum) {
        if (firstNum >= thirdNum) {
            console.log(firstNum)
        }
        else {
              console.log(thirdNum)  
        }
    }
    else if (secondNum >= thirdNum) {
        if (secondNum >= firstNum) {
            console.log(secondNum)
        }
        else {
              console.log(firstNum)  
        }
    }
    else if (thirdNum >= firstNum) {
        if (thirdNum >= secondNum) {
            console.log(thirdNum)
        }
        else {
              console.log(secondNum)  
        }
    }
}
//findTheBiggestOfThree()