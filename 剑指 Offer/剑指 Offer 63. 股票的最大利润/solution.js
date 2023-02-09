/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length
  let dp = new Array(n + 1).fill(0).map(() => new Array(2).fill(0))
  for (let i = 0; i <= n; i++) dp[i][1] = -Infinity
  for (let i = 1; i <= n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i - 1])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i - 1])
  }
  return dp[n][0]
}
