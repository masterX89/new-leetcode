/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const twoSumClosest = (start, target) => {
    let lo = start
    let hi = nums.length - 1
    let delta = Infinity
    while (lo < hi) {
      const sum = nums[lo] + nums[hi]
      if (Math.abs(target - sum) < Math.abs(delta)) delta = target - sum
      if (sum === target) return sum
      else if (sum < target) {
        while (lo < hi && nums[++lo] === nums[lo - 1]) {}
      } else if (sum > target) {
        while (lo < hi && nums[--hi] === nums[hi + 1]) {}
      }
    }
    return target - delta
  }
  nums.sort((a, b) => a - b)
  let delta = Infinity
  for (let i = 0; i < nums.length; i++) {
    const sum = nums[i] + twoSumClosest(i + 1, target - nums[i])
    if (Math.abs(target - sum) < Math.abs(delta)) delta = target - sum
  }
  return target - delta
}
