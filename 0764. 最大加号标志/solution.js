/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
  let res = 0
  const grid = new Array(n).fill(0).map(() => new Array(n).fill(1))
  for (const mine of mines) {
    grid[mine[0]][mine[1]] = 0
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) continue
      let top = (bottom = i)
      let left = (right = j)
      while (top > 0 && grid[top - 1][j] !== 0) top--
      while (bottom < n - 1 && grid[bottom + 1][j] !== 0) bottom++
      while (left > 0 && grid[i][left - 1] !== 0) left--
      while (right < n - 1 && grid[i][right + 1] !== 0) right++
      res = Math.max(
        res,
        Math.min(i - top + 1, bottom - i + 1, j - left + 1, right - j + 1)
      )
    }
  }
  return res
}
