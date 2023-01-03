/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  const n = nums.length
  let res = 0
  let lower = (upper = -1)
  for (let r = 0; r < n; r++) {
    if (nums[r] > right) lower = r
    if (nums[r] >= left) upper = r
    res += upper - lower
  }
  return res
}
