/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// dp[i][j] [0, i - 1] 的硬币可以装满 j 的空间的方式
var change = function (amount, coins) {
  const n = coins.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(amount + 1).fill(0))
  for (let i = 0; i <= n; i++) dp[i][0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amount; j++) {
      if (coins[i - 1] > j) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]]
      }
    }
  }
  return dp[n][amount]
}
