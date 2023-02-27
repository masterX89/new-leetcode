/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let res = []
  if (matrix.length === 0 || matrix[0].length === 0) return []
  const m = matrix.length
  const n = matrix[0].length
  let [left_bound, right_bound, top_bound, bottom_bound] = [0, n - 1, 0, m - 1]
  while (res.length < m * n) {
    for (
      let i = top_bound, j = left_bound;
      top_bound <= bottom_bound && j <= right_bound;
      j++
    ) {
      res.push(matrix[i][j])
    }
    top_bound++
    for (
      let i = top_bound, j = right_bound;
      left_bound <= right_bound && i <= bottom_bound;
      i++
    ) {
      res.push(matrix[i][j])
    }
    right_bound--
    for (
      let i = bottom_bound, j = right_bound;
      top_bound <= bottom_bound && j >= left_bound;
      j--
    ) {
      res.push(matrix[i][j])
    }
    bottom_bound--
    for (
      let i = bottom_bound, j = left_bound;
      left_bound <= right_bound && i >= top_bound;
      i--
    ) {
      res.push(matrix[i][j])
    }
    left_bound++
  }
  return res
}
