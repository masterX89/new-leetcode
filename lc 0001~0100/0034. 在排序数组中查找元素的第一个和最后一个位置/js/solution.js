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
  const n = nums.length
  let [l, r] = [0, n - 1]
  while (l <= r) {
    let c = l + ((r - l) >> 1)
    if (nums[c] >= target) r = c - 1
    else l = c + 1
  }
  // r l
  if (l === n || nums[l] !== target) return [-1, -1]
  res.push(l)
  ;[l, r] = [0, n - 1]
  while (l <= r) {
    let c = l + ((r - l) >> 1)
    if (nums[c] <= target) l = c + 1
    else r = c - 1
  }
  res.push(r)
  return res
}
