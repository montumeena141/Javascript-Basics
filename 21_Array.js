// 📌 Arrays in JavaScript
// Arrays can store multiple values of different data types

// 🔹 Creating an Array with mixed data types
let val = [1, "Montu", null, { name: "Montu", city: "Vadodara" }];

// 🔹 Accessing elements in an array
console.log(val);         // Output: Entire array
console.log(val[2]);      // Output: null (3rd element)

// 🔹 Printing individual elements using a for loop
console.log("Printing elements of 'val' array:");
for (let index = 0; index < val.length; index++) {
  console.log(val[index]);
}

// 🔹 Updating values in an array
let arr = [1, 2, 3];

for (let ind = 0; ind < arr.length; ind++) {
  arr[ind] = arr[ind] + 5; // Adding 5 to each element
}
console.log("Updated array:", arr); // Output: [6, 7, 8]

// 🔹 Array Methods: push()
// The push() method adds elements to the end of an array
let arr2 = [1, 2, 3, 4];
console.log(arr2.push(5, arr2[1])); // Output: New length of the array
console.log("Updated arr2:", arr2); // Output: [1, 2, 3, 4, 5, 2]

