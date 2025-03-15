// 🔹 Basic Array Manipulation Methods: push, pop, unshift, shift
let arr4 = [1, 2, 3];
// push() -> Adds an element at the end
arr4.push(4);
console.log("After push:", arr4); // [1, 2, 3, 4]


// pop() -> Removes the last element
arr4.pop();
console.log("After pop:", arr4); // [1, 2, 3]


// unshift() -> Adds an element at the beginning
arr4.unshift(0);
console.log("After unshift:", arr4); // [0, 1, 2, 3]


// shift() -> Removes the first element
arr4.shift();
console.log("After shift:", arr4); // [1, 2, 3]


// 🔹 splice() -> Add, replace, or remove elements at a specific index
let arr5 = [1, 2, 3, 4, 5];
// arr5.splice(3, 1);  // Removes 1 element at index 3
// arr5.splice(3, 1, 6); // Replaces the element at index 3 with 6
arr5.splice(0, 2, 8, 9); // Replaces first two elements with 8, 9
//index,remove,replace
console.log("After splice:", arr5); // [8, 9, 3, 4, 5]


// 🔹 Adding elements without removing any using splice()
let arr6 = [1, 2, 3, 4, 5];
// Insert 9, 10 at index 4 without deleting elements
arr6.splice(4, 0, 9, 10);
console.log("After adding without deletion:", arr6); // [1, 2, 3, 4, 9, 10, 5]


// 🔹 concat() -> Combines two arrays
let arr8 = [1, 2, 3];
let arr9 = [4, 5, 6];

let arr10 = arr8.concat(arr9);
console.log("Concatenated Array:", arr10); // [1, 2, 3, 4, 5, 6]


// 🔹 indexOf() -> Finds the index of an element in an array
console.log("Index of 2 in arr8:", arr8.indexOf(2)); // 1
console.log("Index of 2 in arr9:", arr9.indexOf(2)); // -1 (not found)


// 🔹 slice(start, end) -> Extracts part of an array
let arr11 = [10, 20, 30, 40, 50];
let slicedArr = arr11.slice(1, 4);
console.log("Sliced Array:", slicedArr); // [20, 30, 40]


// 🔹 forEach() -> Iterates over an array
let arr12 = [2, 4, 6];

arr12.forEach((value, index, array) => {
  console.log(`Value: ${value}, Index: ${index}, Array:`, array);
});
// Output:
// Value: 2, Index: 0, Array: [2, 4, 6]
// Value: 4, Index: 1, Array: [2, 4, 6]
// Value: 6, Index: 2, Array: [2, 4, 6]


// 🔹 filter() -> Filters elements based on a condition
let arr13 = [1, 2, 3, 4, 5, 6];
let evenNumbers = arr13.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // [2, 4, 6]


// 🔹 find() -> Finds the first matching element in an array
let firstEven = arr13.find(num => num % 2 === 0);
console.log("First even number:", firstEven); // 2


// 🔹 findIndex() -> Finds the index of the first matching element
let firstEvenIndex = arr13.findIndex(num => num % 2 === 0);
console.log("Index of first even number:", firstEvenIndex); // 1


// 🔹 some() -> Checks if at least one element satisfies a condition
let hasEven = arr13.some(num => num % 2 === 0);
console.log("Has even number?", hasEven); // true


// 🔹 every() -> Checks if all elements satisfy a condition
let allEven = arr13.every(num => num % 2 === 0);
console.log("All are even?", allEven); // false


// 🔹 includes() -> Checks if an array contains a specific value
let hasThree = arr13.includes(3);
console.log("Contains 3?", hasThree); // true


// 🔹 reverse() -> Reverses the array order
let reversedArr = arr13.slice().reverse(); // Using slice() to avoid modifying original
console.log("Reversed Array:", reversedArr); // [6, 5, 4, 3, 2, 1]


// 🔹 join() -> Converts array to string with separator
let joinedArr = arr13.join(" - ");
console.log("Joined String:", joinedArr); // "1 - 2 - 3 - 4 - 5 - 6"


// 🔹 split() -> Converts string to array
let str = "Hello World JavaScript";
let words = str.split(" ");
console.log("Split Array:", words); // ["Hello", "World", "JavaScript"]
