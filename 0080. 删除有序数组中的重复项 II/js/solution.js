/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const process = (nums, k) => {
    let index = 0
    for (let num of nums) {
      if (index < k || nums[index - k] !== num) {
        nums[index++] = num
      }
    }
    return index
  }
  return process(nums, 2)
}
