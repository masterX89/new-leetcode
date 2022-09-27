// 归并排序
const mergeSort = (nums, lo, hi) => {
  if (lo === hi) return nums
  const mid = lo + ((hi - lo) >> 1)
  mergeSort(nums, lo, mid)
  mergeSort(nums, mid + 1, hi)
  const sorted = new Array(hi - lo + 1)
  for (let i = lo, j = mid + 1, k = 0; k < sorted.length; k++) {
    if (i === mid + 1) sorted[k] = nums[j++]
    else if (j === hi + 1) sorted[k] = nums[i++]
    else if (nums[i] > nums[j]) sorted[k] = nums[j++]
    else sorted[k] = nums[i++]
  }
  for (let i = 0; i < sorted.length; i++) {
    nums[lo + i] = sorted[i]
  }
  return nums
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return mergeSort(nums, 0, nums.length - 1)
}
