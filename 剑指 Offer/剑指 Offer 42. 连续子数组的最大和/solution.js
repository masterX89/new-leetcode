/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length
  let dp = new Array(n + 1).fill(-Infinity)
  for (let i = 1; i <= n; i++) {
    dp[i] = Math.max(nums[i - 1], dp[i - 1] + nums[i - 1])
  }
  return Math.max(...dp)
}
