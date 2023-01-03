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
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // in-place
  const quickSort = (nums, lo, hi) => {
    const partition = (nums, lo, hi) => {
      const pivot = nums[hi]
      let i = (j = lo)
      while (j < hi) {
        if (nums[j] < pivot) {
          swap(nums, i, j)
          i++
        }
        j++
      }
      swap(nums, i, hi)
      return i
    }
    // base case
    if (lo >= hi) return
    const p = partition(nums, lo, hi)
    quickSort(nums, lo, p - 1)
    quickSort(nums, p + 1, hi)
  }
  const shuffle = (nums) => {
    const n = nums.length
    for (let i = 0; i < n; i++) {
      // 生成 [i, n - 1] 的随机数
      const r = i + parseInt(Math.random() * (n - i))
      swap(nums, i, r)
    }
  }
  const swap = (nums, i, j) => {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }
  shuffle(nums)
  quickSort(nums, 0, nums.length - 1)
  return nums
}
