// 📌 forEach Loop in JavaScript
// The `forEach` method is used to iterate over an array
// Syntax: arrayName.forEach(function(value, index, array){})

let arr2 = [1, 2, 3, 4, 5];

// 🔹 Using forEach Loop
arr2.forEach((value, index, array) => {
  console.log("Value:", value);   // Prints each element
  console.log("Index:", index);   // Prints the index of each element
  console.log("Array:", array);   // Prints the entire array (same for all iterations)
});
