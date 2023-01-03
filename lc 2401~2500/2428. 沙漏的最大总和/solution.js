/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
  let res = 0
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[0].length - 1; j++) {
      const num =
        grid[i - 1][j - 1] +
        grid[i - 1][j] +
        grid[i - 1][j + 1] +
        grid[i][j] +
        grid[i + 1][j - 1] +
        grid[i + 1][j] +
        grid[i + 1][j + 1]
      res = Math.max(res, num)
    }
  }
  return res
}
