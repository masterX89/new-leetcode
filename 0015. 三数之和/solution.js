/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = []
  const twoSum = (start, target) => {
    let res = []
    let lo = start
    let hi = nums.length - 1
    while (lo < hi) {
      const sum = nums[lo] + nums[hi]
      if (sum === target) {
        res.push([nums[lo], nums[hi]])
        while (lo < hi && nums[++lo] === nums[lo - 1]) {}
        while (lo < hi && nums[--hi] === nums[hi + 1]) {}
      } else if (sum < target) {
        while (lo < hi && nums[++lo] === nums[lo - 1]) {}
      } else if (sum > target) {
        while (lo < hi && nums[--hi] === nums[hi + 1]) {}
      }
    }
    return res
  }
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    const tuples = twoSum(i + 1, -nums[i])
    for (let tuple of tuples) {
      res.push([nums[i], ...tuple])
    }
    while (i < nums.length - 1 && nums[i] === nums[i + 1]) i++
  }
  return res
}
