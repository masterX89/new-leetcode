/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
// dp[i][j] i - 1 和 j - 1 的最小 ASCII 和
var minimumDeleteSum = function (s1, s2) {
  const n = s1.length
  const m = s2.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
  for (let i = 1; i <= n; i++) dp[i][0] = dp[i - 1][0] + s1[i - 1].charCodeAt()
  for (let j = 1; j <= m; j++) dp[0][j] = dp[0][j - 1] + s2[j - 1].charCodeAt()
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + s1[i - 1].charCodeAt(),
          dp[i][j - 1] + s2[j - 1].charCodeAt()
        )
      }
    }
  }
  return dp[n][m]
}
