/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] < nums[mid + 1]) l = mid + 1
    else r = mid
  }
  return r
}
