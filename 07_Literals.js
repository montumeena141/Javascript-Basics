// 🔹 Literals (Fixed Object Syntax)
var a1 = 5;             // Number Literal
var name = "Harsh";     // String Literal
var arr = [1, 2, 3];    // Array Literal
var bool = true;        // Boolean Literal

// ✅ Fixed Object (Property names must be strings or identifiers)
var obj = {
    name: "Harsh",
    age: 25,
};
console.log(obj);

// 🔹 String Literals in Different Quotes
// "", '', `` (Backticks used for template literals)
var aa = 'test1';
var ba = "test2";
var ca = `test3`;
console.log(aa);
console.log(ba);
console.log(ca);

// 🔹 Template Literals (Fixed Variable Interpolation)
// ❌ Incorrect: var greet = "${name}, welcome to the js module";
var tl1 = "Harsh";
var greet = `${tl1}, welcome to the JS module!`; // ✅ Correct usage of template literals
console.log(greet);

// 🔹 Comments
// Single-line Comment
/* Multi-line
   Comment */

// 🔹 Precedence & Associativity of Operators
// Example: 5 * 6 + 9 - 7 / 2  
// Solving in order: (5 * 6) + 9 - (7 / 2)

var result1 = 3 * 2 * 5 / 2;  // Multiplication & Division are left-to-right
console.log(result1); // Output: 15

// 🔹 Explicit Type Conversion (Fixed)
var str = "40011";  // String to Number
var num1 = Number(str);   // Converts entire string to a number
var num2 = parseInt(str); // Parses the integer part
console.log(num1); // Output: 40011
console.log(num2); // Output: 40011

// 🔹 Number to String Conversion
var num = 123;
console.log(String(num));     // Using String()
console.log(num.toString());  // Using .toString()

// 🔹 Checking Data Type
var arr1 = [1, 2, 3];
console.log(typeof arr1);  // Output: "object" (Arrays are objects in JavaScript)
