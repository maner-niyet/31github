function transposeMatrix(matrix) {
  const transposed = [];
  for (let i = 0; i < matrix[0].length; i++) {
    transposed.push([matrix[0][i]]);
  }
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      transposed[col].push(matrix[row][col])
    }
  }
  return transposed;
}
//TC: O(n*m) where n is # of rows, m is # cols
//SC: O(n*m)

// refactored
function transposeMatrix(matrix) {
  const transposed = [];
  for (let col = 0; col < matrix[0].length; col++) {
    const newRow = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col])
    }
    transposed.push(newRow)
  }
  return transposed;
}
//TC: O(n*m) where n is # of rows, m is # of cols
//SC: O(n*m)