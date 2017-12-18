function checkIfPointIsInACurcle(pointCoords){
    let x = pointCoords[0];
    let y = pointCoords[1];
    const R = 2.0;

    let distance = Math.sqrt(x*x +y*y);

    if (distance <= R) {
        console.log("yes " + distance.toFixed(2))
    } else {
        console.log("no " + distance.toFixed(2))
    }
}

// checkIfPointIsInACurcle(['-2', '0']);