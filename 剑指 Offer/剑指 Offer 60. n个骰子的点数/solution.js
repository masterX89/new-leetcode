/**
 * @param {number} n
 * @return {number[]}
 */
// dp[i][j]: 第 i 个骰子的点数之和 j 出现的次数
var dicesProbability = function (n) {
  let res = []
  let dp = new Array(12).fill(0).map(() => new Array(67).fill(0))
  for (let j = 1; j <= 6; j++) dp[1][j] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = i; j <= 6 * i; j++) {
      for (let k = 1; k <= 6; k++) {
        if (j - k <= 0) break
        dp[i][j] += dp[i - 1][j - k]
      }
    }
  }
  for (let i = n; i <= 6 * n; i++) res.push(dp[n][i] / Math.pow(6, n))
  return res
}
