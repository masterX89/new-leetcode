/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const n = word1.length
  const m = word2.length
  const memo = new Array(n).fill(0).map(() => new Array(m).fill(-1))
  // 返回 s1[0..i] 和 s2[0..j] 的最小编辑距离
  const dp = (i, j) => {
    // base case
    if (i === -1) return j + 1
    if (j === -1) return i + 1
    if (memo[i][j] !== -1) return memo[i][j]

    if (word1[i] === word2[j]) {
      memo[i][j] = dp(i - 1, j - 1)
    } else {
      memo[i][j] = Math.min(dp(i, j - 1), dp(i - 1, j), dp(i - 1, j - 1)) + 1
    }
    return memo[i][j]
  }
  return dp(n - 1, m - 1)
}

var minDistance = function (word1, word2) {
  const n = word1.length
  const m = word2.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
  for (let i = 0; i <= n; i++) dp[i][0] = i
  for (let j = 0; j <= m; j++) dp[0][j] = j
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
      }
    }
  }
  return dp[n][m]
}
