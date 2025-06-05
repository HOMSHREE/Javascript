// var score = "1234asd" // converts to NaN
// var score = null // converts to 0
// var score = undefined // converts to NaN
var score = true // converts to 1


// console.log(typeof score); 

var valueInNumber = Number(score); // Converts string to number
// console.log(typeof valueInNumber); 
// console.log(valueInNumber);  // prints NaN (Not a Number) because the string contains non-numeric characters

// "33" => 33
// "33asd" => NaN
// true => 1 & false => 0

let isLoggedIn = 1; 

let booleanIsLoggedIn = Boolean(isLoggedIn); // Converts number to boolean
// console.log(booleanIsLoggedIn); // prints true

// 1 => true
// 0 => false
// "" => false
// "Hom" => true

let someNumber = 33;
let someString = String(someNumber); // Converts number to string
console.log(typeof someString); // prints "33"