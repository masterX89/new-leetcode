/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
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
  const threeSum = (start, target) => {
    let res = []
    for (let i = start; i < nums.length; i++) {
      const tuples = twoSum(i + 1, target - nums[i])
      for (const tuple of tuples) {
        res.push([nums[i], ...tuple])
      }
      while (i < nums.length - 1 && nums[i] === nums[i + 1]) i++
    }
    return res
  }
  let res = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    const tuples = threeSum(i + 1, target - nums[i])
    for (const tuple of tuples) {
      res.push([nums[i], ...tuple])
    }
    while (i < nums.length - 1 && nums[i] === nums[i + 1]) i++
  }
  return res
}
