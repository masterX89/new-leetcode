/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const process = (nums, k) => {
    let slow = 0
    for (let fast = 0; fast < nums.length; fast++) {
      if (slow < k || nums[fast] !== nums[slow - k]) nums[slow++] = nums[fast]
    }
    return slow
  }
  return process(nums, 2)
}
