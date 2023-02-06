/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const n = nums.length
  let l = 0
  // 1. 无法进入循环 2. 仍需要比较 nums[n - 1] 是否符合
  let r = n - 1
  while (l < r) {
    const c = l + ((r - l) >> 1)
    if (nums[c] < nums[c + 1]) l = c + 1
    else r = c
  }
  return r
}
