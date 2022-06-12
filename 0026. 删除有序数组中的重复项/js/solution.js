/**
 * @param {number[]} nums
 * @return {number}
 */
// 快慢指针
var removeDuplicates = function (nums) {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) nums[++slow] = nums[fast]
  }
  return slow + 1
}

var removeDuplicates = function (nums) {
  function process(nums, k) {
    let slow = 0
    for (let fast = 0; fast < nums.length; fast++) {
      if (slow < k || nums[slow - k] !== nums[fast]) nums[slow++] = nums[fast]
    }
    return slow
  }
  return process(nums, 1)
}
