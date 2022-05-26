/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let res = 0
  let l1 = 0
  let l2 = 0
  let sum1 = 0
  let sum2 = 0
  let r = 0
  while (r < nums.length) {
    const c = nums[r]
    r++
    sum1 += c
    sum2 += c
    while (sum1 > goal && l1 < r) {
      const d = nums[l1]
      l1++
      sum1 -= d
    }
    while (sum2 >= goal && l2 < r) {
      const d = nums[l2]
      l2++
      sum2 -= d
    }
    res += l2 - l1
  }
  return res
}
