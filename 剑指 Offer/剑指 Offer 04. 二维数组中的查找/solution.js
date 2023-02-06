/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length === 0) return false
  const n = matrix.length
  const m = matrix[0].length
  let row = n - 1
  let col = 0
  while (row >= 0 && col < m) {
    const val = matrix[row][col]
    if (val === target) return true
    else if (val < target) col++
    else row--
  }
  return false
}
