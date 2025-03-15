// 🚀 2D ARRAYS (ARRAYS INSIDE ARRAYS)

// ✅ CREATING A 2D ARRAY
let arr18 = [
    [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5],
    [2], [2, 3], [2, 3, 4], [2, 3, 4, 5], [3], [3, 4], [3, 4, 5],
    [4], [4, 5], [5]
  ];
  
  // ✅ ACCESSING A SPECIFIC ELEMENT
  console.log("🔹 Specific Element arr18[4][4]:", arr18[4][4]); // Undefined (arr18[4] has only 5 elements)
  
  // ✅ PRINTING 2D ARRAY USING LOOPS
  console.log("\n🔹 Printing 2D Array:");
  let res=[]
  for (let row = 0; row < arr18.length; row++) {
    for (let col = 0; col < arr18[row].length; col++) {
      console.log(arr18[row][col]); // Prints each element inside the subarrays
      res.push(arr18[row][col]);
    }
  }
  console.log(res);
  // ✅ STORING ALL ELEMENTS OF A 2D ARRAY INTO A 1D ARRAY
  console.log("\n🔹 Storing Elements in a New Array:");
  let storeArray19 = [];
  let arr19 = [[1, 2], [2, 3], [1, 2, 3, 4], [1, 2, 3, 4], [1]];
  
  for (let row = 0; row < arr19.length; row++) {
    for (let col = 0; col < arr19[row].length; col++) {
      console.log(arr19[row][col]); // Printing elements
      storeArray19.push(arr19[row][col]); // Storing elements in a new array
    }
  }
  
  console.log("Stored 1D Array:", storeArray19);
  