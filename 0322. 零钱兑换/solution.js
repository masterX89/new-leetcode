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

// iterate
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1)
  // base case
  dp[0] = 0
  for (let i = 0; i < dp.length; i++) {
    for (const coin of coins) {
      if (i - coin < 0) continue
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount]
}
