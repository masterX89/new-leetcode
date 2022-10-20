/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = new Array(nums.length).fill(0)
  for (let i = 0; i < nums.length; i++) {
    if (i - 1 === -1) {
      dp[i] = nums[i]
      continue
    }
    if (i - 2 === -1) {
      dp[i] = Math.max(dp[i - 1], nums[i])
      continue
    }
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp[nums.length - 1]
}

var rob = function (nums) {
  const memo = new Array(nums.length).fill(-1)
  const dp = (pos) => {
    // base case
    if (pos < 0) return 0
    if (memo[pos] !== -1) return memo[pos]
    memo[pos] = Math.max(dp(pos - 1), dp(pos - 2) + nums[pos])
    return memo[pos]
  }
  return dp(nums.length - 1)
}
