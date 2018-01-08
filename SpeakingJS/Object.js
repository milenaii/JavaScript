'use strict';

// SINGLE OBJECT

let jane = {
    name: 'Jane',               //name -> prop
    describe: function (){                  //describe -> method
        return 'Person named ' + this.name;
    }
};

function getterSetter(jane){
    console.log(jane.name);          //Jane
    console.log(jane.describe());   // Person named Jane  
}

getterSetter(jane);

//PROP CREATE AUTHOMATICALLY
jane.age = 35;

//operator IN - if that prop exist in that obj:
console.log('nnnn' in jane);    // false

console.log('age' in jane);     // true

//DELETE PROP

  delete jane.age;

  console.log(jane.age);   //undefined


  //EXTRACTING METHOD - it must have .bind, otherwise -> TypeError

  let func = jane.describe.bind(jane);
  console.log(func());   // Person named Jane 