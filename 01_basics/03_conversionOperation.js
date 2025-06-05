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



// ******** Operations *********

let value = 3
let negValue = -value
// console.log(negValue);


// console.log ("1" + 2); // prints "12" (string concatenation)
// console.log(1 + "2"); // prints "12" (string concatenation)
// console.log(1 + 2); // prints 3 (number addition)
// console.log("1" + 2 + 3); // prints "123" (string concatenation)
// console.log(1 + 2 + "3"); // prints "33" (number addition followed by string concatenation)

// console.log(+true); // prints 1 (true is converted to number)
// console.log(+false); // prints 0 (false is converted to number)

let n1, n2, n3;

n1 = n2 = n3 = 2 + 2; // Assigns the value 4 to n1, n2, and n3

let gameScore = 100;
gameScore++;
// console.log(gameScore); // prints 101 (postfix increment)
gameScore--;
// console.log(gameScore); // prints 100 (postfix decrement)

++gameScore;
// console.log(gameScore); // prints 101 (prefix increment)
--gameScore;
// console.log(gameScore); // prints 100 (prefix decrement)

// preficx and postfix increment/decrement operators