/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let [l, r] = [0, 0]
  let sum = 0
  let res = Infinity
  while (r < nums.length) {
    const c = nums[r]
    r++
    sum += c
    // >= target shrink
    while (sum >= target) {
      res = Math.min(res, r - l)
      const d = nums[l]
      l++
      sum -= d
    }
  }
  return res === Infinity ? 0 : res
}
