function calculate3(n, k) {

    let nFact = 1;
    let kFact = 1;
    let nMinusKFact = 1;

    for (i = 1; i <= n; i++) {
        
        nFact *= i;

        if(i >= 1 && i <= k){
            kFact *= i;
        }

        if(i >= 1 && i <= n - k){
            nMinusKFact *= i;
        }
    }
    console.log(nFact/(kFact * nMinusKFact));
}

calculate3(52,5);