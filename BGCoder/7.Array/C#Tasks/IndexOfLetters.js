function indexOfLetter(input) {
    //let result = '';

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (input[i] === alphabet[j]) {
                console.log(j);
            }
        }
    }
}

indexOfLetter('telerik');
