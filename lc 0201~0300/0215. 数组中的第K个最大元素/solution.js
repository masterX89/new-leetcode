/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const partition = (nums, lo, hi) => {
    let pivot = nums[hi]
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
  const swap = (nums, i, j) => {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }
  let lo = 0
  let hi = nums.length - 1
  k = nums.length - k
  while (lo <= hi) {
    const p = partition(nums, lo, hi)
    if (p === k) return nums[p]
    else if (p < k) lo = p + 1
    else if (p > k) hi = p - 1
  }
  return -1
}
