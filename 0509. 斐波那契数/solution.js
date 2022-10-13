/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const memo = new Array(n + 1).fill(0)
  const helper = (n) => {
    if (n === 0 || n === 1) return n
    if (memo[n] !== 0) return memo[n]
    memo[n] = helper(n - 1) + helper(n - 2)
    return memo[n]
  }
  return helper(n)
}

var fib = function (n) {
  const dp = new Array(n + 1).fill(0)
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
