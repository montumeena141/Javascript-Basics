// 🚀 MATRIX ADDITION

// ✅ Defining Two Matrices
let matrix = [
    [1, 2],
    [4, 2]
  ];
  
  let matrix1 = [
    [5, 4],
    [2, 5]
  ];
  
  console.log("🔹 Matrix Addition Result:");
  let matrix3 = [];
  
  // ✅ Performing Matrix Addition
  for (let row = 0; row < matrix.length; row++) {
    matrix3[row] = []; // Initialize empty row
    for (let col = 0; col < matrix[row].length; col++) {
      matrix3[row][col] = matrix[row][col] + matrix1[row][col]; // Adding corresponding elements
    }
  }
  
  // ✅ Printing the Resulting Matrix
  for (let row = 0; row < matrix3.length; row++) {
    console.log(matrix3[row]); // Displaying row-wise output
  }
  
  // ✅ Storing the Matrix into a 1D Array
  let storeMatrix = [];
  for (let row = 0; row < matrix3.length; row++) {
    for (let col = 0; col < matrix3[row].length; col++) {
      storeMatrix.push(matrix3[row][col]);
    }
  }
  
  console.log("\n🔹 Flattened Matrix Array:", storeMatrix);
  