/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1)
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] >= nums[i]) continue
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
  return Math.max(...dp)
}
