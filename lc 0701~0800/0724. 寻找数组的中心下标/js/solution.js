/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sumsL = new Array(nums.length + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    sumsL[i + 1] = sumsL[i] + nums[i]
  }
  const sum = sumsL[sumsL.length - 1]
  for (let i = 0; i < sumsL.length; i++) {
    if (sumsL[i] === sum - sumsL[i] - nums[i]) return i
  }
  return -1
}
