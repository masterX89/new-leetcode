/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let index = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      index = i
      break
    }
  }
  if (index === 0) return true
  for (let i = index; i < nums.length - 1; i++) {
    if (nums[i + 1] < nums[i]) return false
  }
  return nums[nums.length - 1] <= nums[0]
}
