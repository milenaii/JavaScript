function sort3Numbers(args) {
    let firstNum = +args[0],
        secondNum = +args[1],
        thirdNum = +args[2];

    let mim, max, middle;

    if (firstNum >= secondNum && firstNum >= thirdNum) {
        if (secondNum >= thirdNum) {
            let sortNums = [firstNum,secondNum,thirdNum];
            console.log(sortNums.join(' '));
        }
        else {
            let sortNums = [firstNum,thirdNum,secondNum];
            console.log(sortNums.join(' '));
        }
    }
    else if (secondNum >= firstNum && secondNum >= thirdNum) {
        if (firstNum >= thirdNum) {
            let sortNums = [secondNum, firstNum, thirdNum];
            console.log(sortNums.join(' '));
        }
        else {
            let sortNums = [secondNum,thirdNum,firstNum];
            console.log(sortNums.join(' '));
        }
    }
    else if (thirdNum >= firstNum && thirdNum >= secondNum) {

        if (firstNum >= secondNum) {
            let sortNums = [thirdNum,firstNum,secondNum];
            console.log(sortNums.join(' '));
        }
        else {
            let sortNums = [thirdNum,secondNum,firstNum];
            console.log(sortNums.join(' '));
        }
    }
}

 sort3Numbers(['-5', '-5', '3']);