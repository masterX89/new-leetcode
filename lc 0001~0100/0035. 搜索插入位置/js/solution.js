/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// >=
var searchInsert = function (nums, target) {
  let [l, r] = [0, nums.length - 1]
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] < target) l = mid + 1
    else r = mid - 1
  }
  return l
}
