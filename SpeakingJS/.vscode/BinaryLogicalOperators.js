function binLogOpersAnd() {
    // && -> if the first operand is falsy, return it, otherwise - return the second:

    function foo (){}
    console.log(false && foo());
}

binLogOpersAnd();

function binLogOpersOr() {
    // || -> if the first operand is truthy, return it, otherwise - return the second:

    function foo (){
        return 2;
    }
    console.log(true && foo());
}

binLogOpersOr();