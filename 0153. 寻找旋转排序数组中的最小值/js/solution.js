/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums[0] < nums[nums.length - 1] || nums.length === 1) return nums[0]
  let [l, r] = [0, nums.length - 1]
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] >= nums[0]) l = mid + 1
    else r = mid - 1
  }
  return nums[l]
}
