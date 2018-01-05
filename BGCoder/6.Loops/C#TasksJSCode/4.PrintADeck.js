function printADeck(arbCard) {
    switch (arbCard) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            for (let i = 1; i <= arbCard; i++) {
                console.log(i + ' of spades, ' + i + '  of clubs, ' + i + ' of hearts, ' + i + ' of diamonds');
            }
            break;
        case 'J':
            for (let i = 1; i <= arbCard; i++) {
                console.log(i + ' of spades, ' + i + '  of clubs, ' + i + ' of hearts, ' + i + ' of diamonds');
            }
            console.log('J' + ' of spades, ' + 'J' + '  of clubs, ' + 'J' + ' of hearts, ' + 'J' + ' of diamonds');
            break;
        case 'Q':
            for (let i = 1; i <= arbCard; i++) {
                console.log(i + ' of spades, ' + i + '  of clubs, ' + i + ' of hearts, ' + i + ' of diamonds');
            }
            console.log('J' + ' of spades, ' + 'J' + '  of clubs, ' + 'J' + ' of hearts, ' + 'J' + ' of diamonds');
            console.log('Q' + ' of spades, ' + 'Q' + '  of clubs, ' + 'Q' + ' of hearts, ' + 'Q' + ' of diamonds');
            break;

        case 'K':
            for (let i = 1; i <= arbCard; i++) {
                console.log(i + ' of spades, ' + i + '  of clubs, ' + i + ' of hearts, ' + i + ' of diamonds');
            }
            console.log('J' + ' of spades, ' + 'J' + '  of clubs, ' + 'J' + ' of hearts, ' + 'J' + ' of diamonds');
            console.log('Q' + ' of spades, ' + 'Q' + '  of clubs, ' + 'Q' + ' of hearts, ' + 'Q' + ' of diamonds');
            console.log('K' + ' of spades, ' + 'K' + '  of clubs, ' + 'K' + ' of hearts, ' + 'K' + ' of diamonds');
            break;
        case 'A':
            for (let i = 1; i <= arbCard; i++) {
                console.log(i + ' of spades, ' + i + '  of clubs, ' + i + ' of hearts, ' + i + ' of diamonds');
            }
            console.log('J' + ' of spades, ' + 'J' + '  of clubs, ' + 'J' + ' of hearts, ' + 'J' + ' of diamonds');
            console.log('Q' + ' of spades, ' + 'Q' + '  of clubs, ' + 'Q' + ' of hearts, ' + 'Q' + ' of diamonds');
            console.log('K' + ' of spades, ' + 'K' + '  of clubs, ' + 'K' + ' of hearts, ' + 'K' + ' of diamonds');
            console.log('A' + ' of spades, ' + 'A' + '  of clubs, ' + 'A' + ' of hearts, ' + 'A' + ' of diamonds');
            break;
        default:
            break;
    }
}
printADeck('K');