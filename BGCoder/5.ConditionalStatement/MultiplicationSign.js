function multiplicationSign(args) {
    let firstNum = +args[0],
        secNum = +args[1]
        thirdNum = +args[2];

    if (firstNum === 0 || secNum === 0 || thirdNum === 0) {
        console.log(0);
    }
    else if (firstNum <= 0 && secNum <= 0 && thirdNum <= 0) {
        console.log("-");
    }
    else if (firstNum <= 0 && secNum >= 0 && thirdNum <= 0) {
        console.log("+");
    }
    else if (firstNum <= 0 && secNum <= 0 && thirdNum >= 0) {
        console.log("+");
    }
    else if (firstNum >= 0 && secNum >= 0 && thirdNum <= 0) {
        console.log("-");
    }
    else if (firstNum <= 0 && secNum >= 0 && thirdNum >= 0) {
        console.log("-");
    }
   else  if (firstNum <= 0 && secNum >= 0 && thirdNum >= 0) {
        console.log("-");
    }
    else if (firstNum >= 0 && secNum >= 0 && thirdNum <= 0) {
        console.log("-");
     }
    else if (firstNum >= 0 && secNum <= 0 && thirdNum <= 0) {
        console.log("+");
    }
    else if (firstNum >= 0 && secNum >= 0 && thirdNum >= 0) {
        console.log("+");
    }

}
//multiplicationSign(['0', '-2.5', '4'])