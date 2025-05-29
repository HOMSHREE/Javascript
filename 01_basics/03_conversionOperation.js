// var score = "1234asd" // converts to NaN
// var score = null // converts to 0
// var score = undefined // converts to NaN
var score = true // converts to 1


console.log(typeof score); 

var valueInNumber = Number(score); // Converts string to number
console.log(typeof valueInNumber); 
console.log(valueInNumber);  // prints NaN (Not a Number) because the string contains non-numeric characters


let isLoggedIn = 1; 

let booleanIsLoggedIn = Boolean(isLoggedIn); // Converts number to boolean