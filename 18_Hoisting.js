// Definition:
// Hoisting is a JavaScript mechanism where variable and function declarations are moved ("hoisted") to the top of their containing scope before code execution.

// How Hoisting Works?
// Variables declared with var are hoisted to the top, but only their declaration (not initialization).
// let and const are hoisted, but they are in a "temporal dead zone" until they are declared.
// Function declarations are fully hoisted, meaning they can be called before their definition.


// Hoisting Example:
// Hoisting allows using a variable before declaring it.
// Variables declared with 'var' are hoisted to the top.
// Uncomment the following lines to see hoisting behavior.

// console.log(x);
// var x = 10;
// console.log(x);

// Variable Declaration & Re-assignment
let x = "msd"; // Initializing variable
x = "vk"; // Reassigning value
console.log(x);

// Function to Sum Two Numbers
function sum(a, b) {
    let total = a + b;
    console.log(total);
}
sum(3, 8);

// Function Expression Example
let sum1 = function(a, b) {
    let total = a + b;
    console.log(total);
};
sum1(2, 3);

// Arrow Function Example
let sum2 = (a, b) => {
    let total = a + b;
    console.log(total);
};
sum2(3, 4);

// Greeting Function with Arrow Syntax
let greeting = (name) => {
    console.log(`Welcome ${name} to the JS class`);
};

greeting("Jassi Bhai");

greeting("Siraj Bhai");

// Single-line Arrow Function
let greeting1 = (name) => console.log(`Welcome ${name} to the JS class`);
greeting1("Montu");

// Function Returning a Greeting Message
let greeting3 = (name) => {
    let msg = `Welcome ${name} to the JS class`;
    console.log(msg);
    return msg + " at 11:30";
};
console.log(greeting3("Montu"));
