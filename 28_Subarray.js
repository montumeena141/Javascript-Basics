// 🚀 SUBARRAYS & REVERSING ARRAYS

let arr14 = [1, 2, 3, 4, 5];

// ✅ SLICE -> Used to extract a portion of an array (returns a new array)
// Syntax: array.slice(startIndex, endIndex) - (endIndex is excluded)
console.log("🔹 Subarray using Slice:");
let slicedArr = arr14.slice(2, 4); // Extracts elements from index 2 to 3
console.log("Original Array:", arr14);
console.log("Sliced Subarray (2,4):", slicedArr);
console.log("Full Array Slice (0,5):", arr14.slice(0, 5)); // Extract full array

// ✅ REVERSE AN ARRAY WITHOUT USING REVERSE()
console.log("\n🔹 Reverse Array (Manual Method)");
let reversedArr = [];

// Reversing manually by iterating from last index to first
for (let i = arr14.length - 1; i >= 0; i--) {
  reversedArr.push(arr14[i]); // Adding elements in reverse order
}
console.log("Reversed Array:", reversedArr);

// ✅ PRINT ARRAY IN REVERSE ORDER WITHOUT STORING IT
console.log("\n🔹 Printing Array in Reverse Order:");
for (let i = arr14.length - 1; i >= 0; i--) {
  console.log(arr14[i]); // Prints each element in reverse order
}

// ✅ COLLECTION OF ALL POSSIBLE SUBARRAYS
console.log("\n🔹 Collection of Subarrays:");
let arr15 = [1, 2, 3, 4, 5];
let allSubarrays = [];

// Generating all possible subarrays
for (let start = 0; start < arr15.length; start++) {
    for (let end = start + 1; end < arr15.length; end++) {
      allSubarrays.push(arr15.slice(start, end));
    }
  }
  
  console.log("All Possible Subarrays:", allSubarrays);
