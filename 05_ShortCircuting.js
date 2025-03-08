// 🔹 Short-Circuiting in JavaScript

// AND (&&) - Stops if the first value is false
console.log(false && "Hello");  // Output: false
console.log(true && "Hello");   // Output: "Hello"

// OR (||) - Stops if the first value is true
console.log(true || "Hello");   // Output: true
console.log(false || "Hello");  // Output: "Hello"

// Example of short-circuiting in an if condition
let a = 5, b = 3;

if (((a > b && a > 5) && a < 10)) {
    console.log("Condition is satisfied"); 
}
// Since `a > 5` is false, the entire condition is false and stops evaluating further.

// 🔹 Compound Assignment Operators
let x = 10;
x += 10; // x = x + 10
console.log(x); // Output: 20

let y = 5;
y *= 10; // y = y * 10
console.log(y); // Output: 50

// 🔹 Logical NOT (!)
console.log(!true); // false
console.log(!false); // true
