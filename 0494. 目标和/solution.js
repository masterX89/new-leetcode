/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let res = 0
  const backtrack = (i, sum) => {
    if (i === nums.length) {
      if (sum === target) res++
      return
    }
    backtrack(i + 1, sum + nums[i])
    backtrack(i + 1, sum - nums[i])
  }
  backtrack(0, 0)
  return res
}
