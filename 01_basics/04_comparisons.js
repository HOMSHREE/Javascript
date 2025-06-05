// console.log(2 > 1); // prints true (2 is greater than 1)
// console.log(2 < 1); // prints false (2 is not less than 1)
// console.log(2 >= 1); // prints true (2 is greater than or equal to 1)
// console.log(2 <= 1); // prints false (2 is not less than or equal to 1)
// console.log(2 == 1); // prints false (2 is not equal to 1)
// console.log(2 != 1); // prints true (2 is not equal to 1)
// console.log(2 === 1); // prints false (strict equality, type and value must match)


console.log("2" > 1); // prints true (string "2" is compared as a number, 2 > 1)
console.log("02" < 1); // prints false (string "2" is compared as a number, 2 < 1)

console.log(null > 0); // prints false (null is treated as 0 in comparisons)
console.log(null == 0); // prints false (null is not equal to 0)
console.log(null >= 0); // prints true (null is treated as 0, so null >= 0 is true)

console.log(undefined > 0); // prints false (undefined is not a number)
console.log(undefined < 0); // prints false (undefined is not a number)
console.log(undefined == 0); // prints false (undefined is not equal to 0)