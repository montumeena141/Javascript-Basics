let arr3 = [2, 4, 6];
let newArr = []; // New array to store transformed values

arr3.forEach((value) => {
  newArr.push(value / 2); // Store the transformed value in newArr
});

console.log("Original Array:", arr3);  // [2, 4, 6]
console.log("New Transformed Array:", newArr); // [1, 2, 3]
