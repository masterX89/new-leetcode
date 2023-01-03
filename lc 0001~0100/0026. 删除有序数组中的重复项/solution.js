/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const helper = (k) => {
    let slow = 0
    for (const num of nums) {
      // [0, k - 1]
      // [0, ..., k - 1, k, ..., 2k - 1, 2k, ...]
      if (slow < k || num !== nums[slow - k]) nums[slow++] = num
    }
    return slow
  }
  return helper(1)
}
