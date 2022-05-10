/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0
  nums.sort((a, b) => a - b)
  let res = 1
  let max = 1
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) continue
    if (nums[i] + 1 === nums[i + 1]) {
      res = Math.max(res, ++max)
    } else {
      max = 1
    }
  }
  return res
}
