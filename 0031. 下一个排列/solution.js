/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2
  let j = (k = nums.length - 1)
  while (i >= 0 && nums[i] >= nums[j]) {
    i--
    j--
  }
  if (i >= 0) {
    while (nums[i] >= nums[k]) k--
    ;[nums[i], nums[k]] = [nums[k], nums[i]]
  }
  for (let k = nums.length - 1; j < k; j++, k--) {
    ;[nums[j], nums[k]] = [nums[k], nums[j]]
  }
}
