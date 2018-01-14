function solve(lexCheck){
    var word = lexCheck[0].split('\n'),
        w1 = word[0],
        w2 = word[1];
    if (w1 === w2) {
        console.log('=');
    } else if (w1 < w2) {
        console.log('<');
    } else {   
        console.log('>');
    }
}

solve(['food\nfood']);
