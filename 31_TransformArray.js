// 🚀 MATRIX TRANSPOSE

// ✅ Defining the Matrix
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [3, 7, 0]
  ];
  
  let transpose = [];
  
  // ✅ Transposing the Matrix
  for (let col = 0; col < matrix[0].length; col++) {
    let newRow = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]); // Swapping row ↔ column
    }
    transpose.push(newRow);
  }
  
  // ✅ Printing the Transposed Matrix
  console.log("🔹 Transposed Matrix:");
  console.log(transpose);
  