/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let dp_i0 = 0
  let dp_i1 = -prices[0] - fee
  for (let i = 0; i < prices.length; i++) {
    dp_i0 = Math.max(dp_i0, dp_i1 + prices[i])
    dp_i1 = Math.max(dp_i1, dp_i0 - prices[i] - fee)
  }
  return dp_i0
}
