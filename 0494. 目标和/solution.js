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
    sum += nums[i]
    backtrack(i + 1, sum)
    sum -= nums[i]
    sum -= nums[i]
    backtrack(i + 1, sum)
    sum += nums[i]
  }
  backtrack(0, 0)
  return res
}
