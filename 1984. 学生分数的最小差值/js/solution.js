/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b)
  let [l, r] = [0, k]
  let res = nums[r - 1] - nums[l]
  while (r < nums.length) {
    r++
    l++
    res = Math.min(res, nums[r - 1] - nums[l])
  }
  return res
}
