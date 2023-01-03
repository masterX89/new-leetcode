/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function (nums) {
  const n = nums.length
  let minNum = nums[n - 1]
  for (let i = n - 3; i >= 0; i--) {
    if (nums[i] > minNum) return false
    const j = i + 1
    minNum = Math.min(minNum, nums[j])
  }
  return true
}
