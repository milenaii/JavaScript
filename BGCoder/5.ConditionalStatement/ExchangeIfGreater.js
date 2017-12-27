function exchangeIfFirstNumIsGreater(params) {

    let a = params[0],
        b = params[1];

    if (a <= b) {
    console.log(a + ' ' + b)
    }
    else {
        console.log(b + ' ' + a)
    }   
}
//exchangeIfFirstNumIsGreater(['5', '2'])