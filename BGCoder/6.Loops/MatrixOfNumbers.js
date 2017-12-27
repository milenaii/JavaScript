function matrixOfNumber(n) {
    
    for (let r = 1; r <= n; r++) {
        var result = '';
        for (let col = 1; col <= n; col++) {
            result += (r + col - 1);
        }
        console.log(result);
    }
}
matrixOfNumber(2);

// function paintMatrix(n) {

//     for (var i = 1; i <= n; i++) {
//         var result = "";
//         for (var j = 1; j <= n; j++) {
//             result += (i + j - 1);
//         }
//         console.log(result);
//     }
// }

// paintMatrix(3);

