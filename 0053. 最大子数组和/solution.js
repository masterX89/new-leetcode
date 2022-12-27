/**
 * @param {number[]} nums
 * @return {number}
 */
// 滑动窗口
var maxSubArray = function (nums) {}
// dp dp[i] 记录了 nums[n - 1] 结尾的最大子数组和
var maxSubArray = function (nums) {
  const n = nums.length
  const dp = new Array(n + 1).fill(-Infinity)
  for (let i = 1; i <= n; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i - 1], nums[i - 1])
  }
  return Math.max(...dp)
}
// preSum
var maxSubArray = function (nums) {}
