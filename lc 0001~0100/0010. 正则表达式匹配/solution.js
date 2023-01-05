/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// dp[i][j] 表示 s[i:] 是否满足 p[j:]
var isMatch = function (s, p) {
  const m = s.length
  const n = p.length
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false))
  // base case
  dp[0][0] = true
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2]
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        // s[i - 1] 和 p[j - 1] 的判断等价于 s[i - 1] 和 p[j - 2]
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          // p[j - 2] 匹配 0 或者多次 -> dp[i - 1][j]
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j]
        } else {
          // p[j - 2] 不匹配, * 必须取 0 -> dp[i][j - 2] (默认 p 合法, j - 2 不越界)
          dp[i][j] = dp[i][j - 2]
        }
      } else {
        dp[i][j] = false
      }
    }
  }
  return dp[m][n]
}
