/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let [l, r] = [0, nums.length - 1]
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] === target) return mid
    if (nums[mid] >= nums[0]) {
      if (nums[mid] < target || target < nums[0]) l = mid + 1
      else r = mid - 1
    } else {
      if (nums[mid] < target && target < nums[0]) l = mid + 1
      else r = mid - 1
    }
  }
  return -1
}
