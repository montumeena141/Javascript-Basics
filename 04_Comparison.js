// Arithmetic Operators => +, -, *, / return the result of operations
// Comparator Operators => ==, ===, >=, <=, !=, !==, <, > return true or false

var a = 5;
var b = "5";

console.log(a == b); // true (loose equality: only compares value, not type)

// === compares both value and data type
console.log(a === b); // false (5 is a number, "5" is a string)

// != -> Loose inequality (only checks value)
console.log(a != b); // false (because 5 == "5" in loose comparison)

// !== -> Strict inequality (checks both value and data type)
console.log(a !== b); // true (5 !== "5" because of different types)

// > Greater than, < Less than
console.log("GL"); 
console.log(a > b); // false (5 > "5" → "5" is converted to 5, so 5 > 5 is false)
console.log(a < b); // false (5 < 5 is false)

// Special cases
console.log(0 / 0); // NaN (Not a Number)
console.log(Number("String")); // NaN (Cannot convert "String" to a number)

// NaN Comparisons
console.log(isNaN("String")); // true ("String" is not a number)
console.log(isNaN("8")); // false ("8" is a valid number)

// Logical Operators: && (AND), || (OR), ! (NOT)
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
