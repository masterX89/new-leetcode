/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  let l = (u = 0)
  let r = n - 1
  let d = m - 1
  const res = []
  while (res.length < m * n) {
    // res.push(matrix[i][j])
    for (let i = u, j = l; u <= d && j <= r; j++) res.push(matrix[i][j])
    u++
    for (let i = u, j = r; l <= r && i <= d; i++) res.push(matrix[i][j])
    r--
    for (let i = d, j = r; u <= d && j >= l; j--) res.push(matrix[i][j])
    d--
    for (let i = d, j = l; l <= r && i >= u; i--) res.push(matrix[i][j])
    l++
  }
  return res
}
