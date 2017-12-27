function calcTrapezoidArea(args) {
    let sideA = +args[0],
        sideB = +args[1],
        height = +args[2];
//if here the args are without + => the answer is not correct  !!!!!
        trapezoidArea = (sideA + sideB)*height/2;
        console.log(trapezoidArea.toFixed(7));
        
}

//calcTrapezoidArea(['5', '7', '12']);