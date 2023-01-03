/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0]
  const helper = (start, end) => {
    const dp = new Array(nums.length).fill(-1)
    for (let i = start; i <= end; i++) {
      if (i === start) {
        dp[i] = nums[i]
        continue
      }
      if (i === start + 1) {
        dp[i] = Math.max(dp[i - 1], nums[i])
        continue
      }
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[end]
  }
  return Math.max(helper(0, nums.length - 2), helper(1, nums.length - 1))
}
