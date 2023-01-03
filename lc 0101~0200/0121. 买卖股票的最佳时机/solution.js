/**
 * dp[i][k][0 or 1] 第 i 天的时候 k 为交易数的上限（注意并非已经完成的交易数） 0 or 1 代表是否持有
 * i [0,n) k [1,K]
 * 求 dp[n-1][K][0]
 *
 * dp[i][k][0] = max(dp[i-1][k][0],dp[i-1][k][1]+prices[i])
 * dp[i][k][1] = max(dp[i-1][k][1],dp[i-1][k-1][0]-prices[i])
 *
 * base case
 * dp[-1][...][0] = dp[...][0][0] = 0
 * dp[-1][...][1] = dp[...][0][1] = -Infinity
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // base case
  // dp[-1][0] = dp[...][0] = 0
  // dp[-1][1] = dp[...][1] = -Infinity
  const dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0))
  dp[-1] = new Array(2).fill(0)
  for (let i = -1; i < prices.length; i++) {
    dp[i][0] = 0
    dp[i][1] = -Infinity
  }
  for (let i = 0; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    // 此处的状态机有所变化
    // -prices[i] 而不是 dp[i - 1][0] - prices[i] 的原因
    // -prices[i] 仅出现在 k = 1 的时候
    // 第 i 天购入股票 dp[i][1] 不依赖 dp[i-1][0] 不是 dp[i-1][0] - prices[i]
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }
  return dp[prices.length - 1][0]
}

var maxProfit = function (prices) {
  // base case
  let dp_i_0 = 0
  let dp_i_1 = -Infinity
  for (let i = 0; i < prices.length; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, -prices[i])
  }
  return dp_i_0
}
