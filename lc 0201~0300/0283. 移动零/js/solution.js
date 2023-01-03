/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) nums[slow++] = nums[fast]
  }
  for (; slow < nums.length; slow++) nums[slow] = 0
}
