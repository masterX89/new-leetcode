/**
 * @param {string} s
 * @return {number}
 */
// dp[i][j] 记录了 [i, j] 的最长回文子序列
var longestPalindromeSubseq = function (s) {
  const n = s.length
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < n; i++) dp[i][i] = 1
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
      }
    }
  }
  return dp[0][n - 1]
}
