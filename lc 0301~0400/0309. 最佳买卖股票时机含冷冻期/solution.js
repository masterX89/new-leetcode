/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0))
  for (let i = 0; i < prices.length; i++) {
    if (i - 1 === -1) {
      dp[i][0] = 0
      dp[i][1] = -prices[i]
      continue
    }
    if (i - 2 === -1) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
      dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
      continue
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])
  }
  return dp[prices.length - 1][0]
}
