/**
 * @param {number[]} nums
 * @return {boolean}
 */
// dp[i][w] [0,i-1] 的 sum 是否为 w
var canPartition = function (nums) {
  const n = nums.length
  const sum = nums.reduce((prev, curr) => prev + curr, 0)
  // sum 为 odd 时候不可能
  if (sum % 2 !== 0) return false
  const target = parseInt(sum / 2)
  const dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array(target + 1).fill(false))
  for (let i = 0; i <= n; i++) dp[i][0] = true
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      if (nums[i - 1] > j) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
      }
    }
  }
  return dp[n][target]
}
