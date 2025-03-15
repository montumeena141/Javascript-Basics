// 📌 break and continue in JavaScript

let arr3 = [1, 2, 3, 4, 5];

// 🔹 Using 'break': Stops the loop when the condition is met
console.log("Using break:");
for (let go = 0; go < arr3.length; go++) {
  if (go === 2) {  // Stops the loop when index = 2
    break;
  }
  console.log(arr3[go]); // Prints 1, 2 (then stops)
}

console.log("\nUsing continue:");
// 🔹 Using 'continue': Skips the current iteration and moves to the next
for (let go = 0; go < arr3.length; go++) {
  if (go === 2) {  // Skips when index = 2
    continue;
  }
  console.log(arr3[go]); // Prints 1, 2, 4, 5 (skips 3)
}
