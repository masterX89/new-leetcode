/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// nums = [5,7,7,8,8,10], target = 8 [3,4]
// [5,7,7,8,8,10], target = 6 [-1,-1]
// nums = [], target = 0 [-1,-1]
var searchRange = function (nums, target) {
  let res = []
  let [l, r] = [0, nums.length - 1]
  // >=
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] < target) l = mid + 1
    else r = mid - 1
  }
  // l
  res.push(l !== nums.length && nums[l] === target ? l : -1)
  if (res[0] === -1) return [-1, -1]
  ;[l, r] = [0, nums.length - 1]
  // <=
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] <= target) l = mid + 1
    else r = mid - 1
  }
  // r
  res.push(r !== -1 && nums[r] === target ? r : -1)
  return res
}
