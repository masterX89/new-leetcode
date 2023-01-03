/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  const n = s.length
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < n; i++) dp[i][i] = 1
  for (let offset = 1; offset < n; offset++) {
    // diagonal
    for (let i = 0; i < n - offset; i++) {
      if (s[i] === s[i + offset]) {
        dp[i][i + offset] = dp[i + 1][i + offset - 1] + 2
      } else {
        dp[i][i + offset] = Math.max(
          dp[i][i + offset - 1],
          dp[i + 1][i + offset]
        )
      }
    }
  }
  return n - dp[0][n - 1]
}
