/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res = []
  const inds = nums.map((_, index) => index)
  inds.sort((a, b) => nums[a] - nums[b])
  let lo = 0
  let hi = nums.length - 1
  while (lo < hi) {
    const sum = nums[inds[lo]] + nums[inds[hi]]
    if (sum === target) {
      res.push(...[inds[lo], inds[hi]])
      while (lo < hi && nums[inds[++lo]] === nums[inds[lo - 1]]) {}
      while (lo < hi && nums[inds[--hi]] === nums[inds[hi + 1]]) {}
    } else if (sum > target) hi--
    else if (sum < target) lo++
  }
  return res
}
