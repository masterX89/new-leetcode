/**
 * @param {number} maxK
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (maxK, prices) {
  let dp = new Array(prices.length)
    .fill(0)
    .map(() => new Array(maxK + 1).fill(0).map(() => new Array(2).fill(0)))
  for (let i = 0; i < prices.length; i++) {
    for (let k = maxK; k >= 1; k--) {
      if (i - 1 === -1) {
        dp[i][k][0] = 0
        dp[i][k][1] = -prices[i]
        continue
      }
      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
    }
  }
  return dp[prices.length - 1][maxK][0]
}
