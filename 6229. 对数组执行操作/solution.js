/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2
      nums[i + 1] = 0
    } else continue
  }
  let slow = 0
  for (const num of nums) {
    if (num !== 0) nums[slow++] = num
  }
  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
}
