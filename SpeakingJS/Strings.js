//strings are immutable  

function stringM(){
    let str = 'abc';
   
    console.log(str[1]);  // b

    console.log(str.length);   // 3
}
stringM();

//string methods

function strMethods() {
    let str = "abc   ";

// slice - copy a substring    
    console.log(str.slice(1));       // bc
    console.log(str.slice(1,2));     // b

    console.log(str.indexOf('b'));   // 1
    console.log(str.indexOf('bc'));  // 1
    console.log(str.indexOf('q'));   // -1
    
    
    let str2 = '    123   ';        // '123'
    console.log(str2.trim());
    
    let str3 = "nKnj";
    let str4 = str3.toUpperCase();
    console.log(str4);              // NKNJ
} 

strMethods();