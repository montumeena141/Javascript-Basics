// 🚀 Sorting Methods in JavaScript

// 1️⃣ Default Sorting (Unicode Order)
let defaultSortArr = [10, 5, 2, 30];
defaultSortArr.sort();
console.log("🔹 Default Sort:", defaultSortArr); // Incorrect for numbers ❌

// 2️⃣ Sorting in Ascending Order (a - b)
let ascArr = [4, 2, 1, 5, 3];
ascArr.sort((a, b) => a - b);
console.log("🔹 Ascending Order:", ascArr); // [1, 2, 3, 4, 5] ✅

// 3️⃣ Sorting in Descending Order (b - a)
let descArr = [4, 2, 1, 5, 3];
descArr.sort((a, b) => b - a);
console.log("🔹 Descending Order:", descArr); // [5, 4, 3, 2, 1] ✅

// 4️⃣ Sorting an Array of Strings
let names = ["Montu", "Zebra", "Apple", "Banana"];
names.sort();
console.log("🔹 Alphabetical Order:", names); // ["Apple", "Banana", "Montu", "Zebra"]

// 5️⃣ Case-Insensitive String Sorting
let mixedCaseNames = ["Montu", "zebra", "apple", "Banana"];
mixedCaseNames.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("🔹 Case-Insensitive Sort:", mixedCaseNames);


// 6️⃣ Sorting Objects (By Age & Name)
let students = [
  { name: "Montu", age: 25 },
  { name: "Meena", age: 22 },
  { name: "Siraj", age: 28 }
];


// Sort by Age
students.sort((a, b) => a.age - b.age);
console.log("🔹 Sorted by Age:", students);


// Sort by Name
students.sort((a, b) => a.name.localeCompare(b.name));
console.log("🔹 Sorted by Name:", students);


// 7️⃣ Reversing an Array
let revArr = [1, 2, 3, 4, 5];
revArr.reverse();
console.log("🔹 Reversed Array:", revArr); // [5, 4, 3, 2, 1] ✅