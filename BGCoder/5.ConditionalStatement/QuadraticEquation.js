function findRootsQuadraticEq(params) {
    let a = +params[0];
    let b = +params[1];
    let c = +params[2];

    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        let x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
        if (x1 < x2) {
            console.log('x1=' + x1.toFixed(2) + '; x2=' + x2.toFixed(2))
        } else {

            console.log('x1=' + x2.toFixed(2) + '; x2=' + x1.toFixed(2))
        }

    }
    else if ((discriminant === 0)) {
        let x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log('x1=x2=' + x1.toFixed(2))
    }
    else {
        console.log('no real roots')
    }
}
//findRootsQuadraticEq(['-0.5', '4', '-8'])