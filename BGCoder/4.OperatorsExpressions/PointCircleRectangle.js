function isPointInCircleRectangle(args) {

    let xCircle = 1,
        yCircle = 1,
        rCircle = 1.5;

    let xPoint = +args[0],
        yPoint = +args[1];

    let xLeftRect = -1,
        xRightRect = -1 + 6,
        yTopRect = 1,
        yDownRect = 1 - 2;

    let isInCircle = false;
    let isInRect = false;

    if ((xPoint - xCircle) * (xPoint - xCircle) + (yPoint - yCircle) * (yPoint - yCircle) <= rCircle * rCircle) {
        isInCircle = true;
    }

    if ((xPoint >= xLeftRect) && (xPoint <= xRightRect) && (yPoint <= yTopRect) && (yPoint >= yDownRect)) {
        isInRect = true;
    }
    if (isInCircle == false && isInRect == false) {
        console.log('outside circle outside rectangle');
    }
    else if (isInCircle == true && isInRect == true) {
        console.log('inside circle inside rectangle');
    }
    else if (isInCircle == false && isInRect == true) {
        console.log('outside circle inside rectangle');
    }
    else if (isInCircle == true && isInRect == false) {
        console.log('inside circle outside rectangle');
    }
}

//isPointInCircleRectangle(['0', '1'])