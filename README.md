# JavaScript Basics Cheat Sheet 📘

Essential JavaScript concepts for quick reference.

## 1. Variables & Constants
let name = "Alice";    // Can be reassigned
const PI = 3.14159;    // Cannot be reassigned
var age = 25;          // Old way (avoid in modern JS)
2. Data Types
javascript
Copy
// Primitive Types
const str = "Hello World";
const num = 42;
const bool = true;
const nullVal = null;
const undefinedVal = undefined;

// Object Types
const person = { name: "John", age: 30 };
const numbers = [1, 2, 3];
const func = () => console.log("Hi!");
3. Functions
javascript
Copy
// Regular Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const multiply = (a, b) => a * b;

// Immediately Invoked Function
(() => {
  console.log("Runs immediately!");
})();
4. Conditionals
javascript
Copy
// If-Else
if (temperature > 30) {
  console.log("Hot day!");
} else if (temperature > 20) {
  console.log("Pleasant day!");
} else {
  console.log("Cold day!");
}

// Ternary Operator
const isAdult = age >= 18 ? "Yes" : "No";
5. Loops
javascript
Copy
// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While Loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
6. Arrays
javascript
Copy
const fruits = ['apple', 'banana'];

// Common Methods
fruits.push('orange');     // Add to end
fruits.pop();              // Remove from end
fruits.map(fruit => fruit.toUpperCase());
fruits.filter(fruit => fruit.length > 5);
7. Objects
javascript
Copy
const car = {
  brand: 'Toyota',
  model: 'Camry',
  start: function() {
    console.log('Engine started!');
  }
};

// Accessing Properties
console.log(car.brand);
car.start();
8. ES6+ Features
javascript
Copy
// Template Literals
console.log(`My name is ${name}`);

// Destructuring
const { brand, model } = car;

// Spread Operator
const newArray = [...fruits, 'grape'];
9. Error Handling
javascript
Copy
try {
  // Code that might throw error
} catch (error) {
  console.log(error.message);
}
