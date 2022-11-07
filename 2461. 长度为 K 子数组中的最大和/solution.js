/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let res = 0
  let preSum = new Array(nums.length + 1)
  preSum[0] = 0
  for (let i = 1; i < preSum.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1]
  }
  let l = (r = 0)
  let window = new Map()
  while (r < nums.length) {
    const c = nums[r++]
    const freq = window.get(c) || 0
    window.set(c, freq + 1)
    while (r - l > k) {
      const d = nums[l++]
      const freq = window.get(d)
      if (freq === 1) window.delete(d)
      else window.set(d, freq - 1)
    }
    if (r - l === k && window.size === k) {
      const sum = preSum[r] - preSum[l]
      res = Math.max(res, sum)
    }
  }
  return res
}
