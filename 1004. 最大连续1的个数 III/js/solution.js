/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let res = 0
  let l = 0
  let r = 0
  let valid = 0
  while (r < nums.length) {
    const c = nums[r]
    r++
    if (c === 0) valid++
    while (valid > k) {
      const d = nums[l]
      l++
      if (d === 0) valid--
    }
    res = Math.max(res, r - l)
  }
  return res
}
