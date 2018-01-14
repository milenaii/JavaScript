
//Math.floor() converts its argument to the closest lower integer
console.log(Math.floor(3.8));   // 3
console.log(Math.floor(-3.8));  // -4


//Math.ceil() converts its argument to the closest higher integer:
console.log(Math.ceil(3.2));   // 4
console.log(Math.ceil(-3.2));  // -3

//Math.round() converts its argument to the closest integer:
console.log(Math.round(3.2)); // 3
console.log(Math.round(3.5)); // 4
console.log(Math.round(3.8)); // 4

//ToInteger() -> +num like floor, - nums like ceil:
console.log(ToInteger(3.2));  // 3
console.log(ToInteger(3.5));  // 3
console.log(ToInteger(3.8));  // 3

console.log(ToInteger(-3.2));  // -3
console.log(ToInteger(-3.5));  // -3
console.log(ToInteger(-3.8));  // -3