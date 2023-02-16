/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  nums.sort((a, b) => a - b)
  let cnt = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) cnt++
    else if (nums[i] === nums[i + 1]) return false
    else if (cnt >= nums[i + 1] - nums[i] - 1) cnt -= nums[i + 1] - nums[i] - 1
    else return false
  }
  return true
}
