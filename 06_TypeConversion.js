// 🔹 Type Conversion and Coercion in JavaScript

// ✅ Implicit Type Coercion (JavaScript automatically converts)
var m = 10;
var n = "9";

var val1 = m + n; // JS converts `m` (number) into a string and concatenates
console.log(val1); // Output: "109" (string)

// ✅ Explicit Type Conversion (Manual Conversion)
var val2 = m + Number(n); // Here, we manually convert "9" (string) to 9 (number)
console.log(val2); // Output: 19 (number)

// 🔹 String Concatenation Example
var firstName = "Harsh";
var secondName = " Ranjan";
var name1 = firstName + secondName; // String + String = String
console.log(name1); // Output: "Harsh Ranjan"

// 🔹 Type Coercion with Mixed Data Types
var result = 5 + 5 + "hello";  
console.log(result); // Output: "10hello"
// Explanation: 
// (5 + 5) → 10 (Addition happens first since both are numbers)
// Then `10 + "hello"` → "10hello" (Number converted to String and concatenated)

var result1 = "Hello" + 5 + 5;
console.log(result1); // Output: "Hello55"
// Explanation: 
// "Hello" + 5 → "Hello5" (String + Number → Number converted to String)
// "Hello5" + 5 → "Hello55" (Again, Number converted to String)

// 🔹 More Examples of Type Conversion
console.log("5" - 2);  // Output: 3  (String "5" converted to Number)
console.log("5" * 2);  // Output: 10 (String "5" converted to Number)
console.log("5" / 2);  // Output: 2.5 (String "5" converted to Number)
console.log("5" - "2"); // Output: 3 (Both are converted to numbers)

// 🔹 Boolean Conversion
console.log(Boolean("")); // Output: false (Empty string is falsy)
console.log(Boolean("Hello")); // Output: true (Non-empty string is truthy)
console.log(Boolean(0)); // Output: false (0 is falsy)
console.log(Boolean(1)); // Output: true (1 is truthy)
console.log(Boolean(null)); // Output: false (null is falsy)
console.log(Boolean(undefined)); // Output: false (undefined is falsy)
console.log(Boolean(NaN)); // Output: false (NaN is falsy)

// 🔹 Number to String Conversion
var num = 100;
console.log(String(num)); // Output: "100"

// 🔹 String to Number Conversion
var str = "42";
console.log(Number(str)); // Output: 42
console.log(parseInt("42px")); // Output: 42 (Ignores "px" and converts to number)
console.log(parseFloat("42.58px")); // Output: 42.58 (Extracts decimal values)
console.log(Number("Hello")); // Output: NaN (Cannot convert non-numeric string)

// 🔹 Special Cases
console.log(0 == false); // Output: true (Because `false` is coerced to 0)
console.log("" == false); // Output: true (Empty string coerced to false)
console.log(null == undefined); // Output: true (Both are treated as similar)
console.log(null === undefined); // Output: false (Strict comparison)
