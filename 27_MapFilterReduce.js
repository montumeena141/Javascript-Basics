// 🚀 MAP, FILTER & REDUCE in JavaScript

// ✅ MAP -> Used to transform the whole array
// Syntax: array.map((element, index, array) => {...})

let arr11 = [1, 2, 3]; // Expected Output -> [6, 7, 8]

// Using map() to add 5 to each element
let newArr = arr11.map(element => element + 5);
console.log("🔹 Map Result:", newArr); // [6, 7, 8]

// forEach vs map:
// - forEach() just iterates; it doesn’t return a new array
// - map() returns a transformed array

// ✅ FILTER -> Used to filter elements based on a condition
// Syntax: array.filter((element, index, array) => {...})

let arr12 = [1, 2, 3, 4, 5, 6, 7];

// Filtering numbers greater than 4
let filteredArr = arr12.filter(element => element > 4);
console.log("🔹 Filter Result:", filteredArr); // [5, 6, 7]

console.log("🔹 Original Array:", arr12); // The original array remains unchanged

// ✅ REDUCE -> Used to reduce the entire array to a single value (sum, product, etc.)
// Syntax: array.reduce((accumulator, currentValue) => {...}, initialValue)

let arr13 = [1, 2, 3, 4, 5, 6, 7];

// Multiplying all elements, starting with an initial value of 2
let reducedValue = arr13.reduce((acc, curr) => acc * curr, 2);
console.log("🔹 Reduce Result:", reducedValue); // 2 * 1 * 2 * 3 * 4 * 5 * 6 * 7

console.log("🔹 Original Array:", arr13); // The original array remains unchanged

// ✅ Function Placeholder (You can implement this function as per your logic)
function minOperations(string) {
  // Implement logic here...
}
minOperations("abcJkla");
