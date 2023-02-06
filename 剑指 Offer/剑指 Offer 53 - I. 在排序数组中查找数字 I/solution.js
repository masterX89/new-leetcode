/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let n = nums.length
  let [l, r] = [0, n - 1]
  while (l <= r) {
    let c = l + ((r - l) >> 1)
    if (nums[c] >= target) r = c - 1
    else l = c + 1
  }
  // r l
  if (l === n || nums[l] !== target) return 0
  const leftEdge = l
  ;[l, r] = [0, n - 1]
  while (l <= r) {
    let c = l + ((r - l) >> 1)
    if (nums[c] <= target) l = c + 1
    else r = c - 1
  }
  return r - leftEdge + 1
}
