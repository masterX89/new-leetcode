/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// recur + memo
var coinChange = function (coins, amount) {
  const memo = new Array(amount + 1).fill(null)
  const helper = (coins, amount) => {
    // base case
    if (amount === 0) return 0
    if (amount < 0) return -1
    if (memo[amount] !== null) return memo[amount]
    let res = Infinity
    for (const coin of coins) {
      const cnt = helper(coins, amount - coin)
      if (cnt < 0) continue
      res = Math.min(res, cnt + 1)
    }
    memo[amount] = res === Infinity ? -1 : res
    return memo[amount]
  }
  return helper(coins, amount)
}

// dp[i] 凑成 i 所需要的最小个数
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i < dp.length; i++) {
    for (const coin of coins) {
      if (coin > i) {
        continue
      } else {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}
