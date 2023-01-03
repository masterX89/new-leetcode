/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // dp[i][k][0] = max(dp[i-1][k][0],dp[i-1][k][1]+prices[i])
  // dp[i][k][1] = max(dp[i-1][k][1],dp[i-1][k-1][0]-prices[i])
  const dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0))
  dp[-1] = new Array(2).fill(0)
  for (let i = -1; i < prices.length; i++) {
    dp[i][0] = 0
    dp[i][1] = -Infinity
  }
  for (let i = 0; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }
  return dp[prices.length - 1][0]
}

var maxProfit = function (prices) {
  let dp_i0 = 0
  let dp_i1 = -Infinity
  for (let i = 0; i < prices.length; i++) {
    dp_i0 = Math.max(dp_i0, dp_i1 + prices[i])
    dp_i1 = Math.max(dp_i1, dp_i0 - prices[i])
  }
  return dp_i0
}
