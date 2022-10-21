/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const inds = nums.map((_, index) => index)
  inds.sort((a, b) => nums[a] - nums[b])
  let lo = 0
  let hi = nums.length - 1
  while (lo < hi) {
    const num = nums[inds[lo]] + nums[inds[hi]]
    if (num === target) return [inds[lo], inds[hi]]
    else if (num > target) hi--
    else if (num < target) lo++
  }
  return [-1, -1]
}
