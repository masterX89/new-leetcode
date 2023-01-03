/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        dp[i][j] = matrix[i][j]
      } else {
        if (j === 0) {
          dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j + 1])
        } else if (j === n - 1) {
          dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j - 1], dp[i - 1][j])
        } else {
          dp[i][j] =
            matrix[i][j] +
            Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1])
        }
      }
    }
  }
  return Math.min(...dp[n - 1])
}
