// The three most common ways to convert any value to a string:
//  String(value)
// ''+value
// value.toString()

//Boolean
console.log(String(false)); // 'false'

//Number
console.log(String(7.35)); // '7.35'

//Object
console.log(String({ first: 'John', last: 'Doe' })); // '[object Object]'

//Array
console.log( String([ 'a', 'b', 'c' ])); // 'a,b,c'


//JSON.stringify()
//Object
console.log(JSON.stringify({ first: 'John', last: 'Doe' })); // {"first":"John","last":"Doe"}

//Array
console.log(JSON.stringify([ 'a', 'b', 'c' ]));  // ["a","b","c"]