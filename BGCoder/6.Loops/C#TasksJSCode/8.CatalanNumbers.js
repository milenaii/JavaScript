function calculateCatalanNumbers(n) {

    let twoNFact = 1;
    let nFact = 1;
    let nPlus1Fact = 1;

    for (let i = 1; i <= 2 * n; i++) {
        twoNFact *= i;
        if (i <= n) {
            nFact *= i;        
        }
        if(i <= n + 1){
            nPlus1Fact *= i;
        }
    }
    let catalanNum = twoNFact/ (nPlus1Fact* nFact);
    console.log(catalanNum);
}

calculateCatalanNumbers(5);