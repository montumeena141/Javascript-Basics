// 📌 Scope in JavaScript
// Scope determines the accessibility and visibility of variables.
// Types: Global Scope, Function Scope, Block Scope

// 🔹 Global Scope: Accessible anywhere in the script
let globalVar = 10; 
console.log(globalVar); // ✅ Accessible

function globalAccess() {
  console.log(globalVar); // ✅ Accessible inside function
}
globalAccess();

if (true) {
  console.log(globalVar); // ✅ Accessible inside block
}

// 🔹 Function Scope: Variables declared inside a function are only accessible within that function
function functionScope() {
  let localVar = 20; // Local to this function
  console.log(localVar); // ✅ Accessible inside function
}
functionScope();

// console.log(localVar); // ❌ Error: localVar is not defined (function scope)

// 🔹 Block Scope: Variables declared with let and const are block-scoped
if (true) {
  let blockVar = 30; // Block-scoped variable
  const constVar = 40; // Block-scoped variable
  console.log(blockVar, constVar); // ✅ Accessible inside block
}

// console.log(blockVar, constVar); // ❌ Error: blockVar and constVar are not accessible outside

// 🔹 Function Scope with var: `var` is function-scoped, not block-scoped
function testVar() {
  var num = 100;
  if (true) {
    var num = 200; // ✅ Same variable (no block scope)
    console.log(num); // ✅ Output: 200
  }
  console.log(num); // ✅ Output: 200 (var is function-scoped)
}
testVar();

// console.log(num); // ❌ Error: num is not defined outside the function

// 📝 Summary:
// 1. Global Scope: Accessible everywhere.
// 2. Function Scope: Accessible only inside the function where declared.
// 3. Block Scope (`let`, `const`): Limited to the `{}` block in which they are declared.
// 4. Function Scope (`var`): Exists throughout the function but ignores block scope.

