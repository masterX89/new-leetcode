/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  let res = 0
  const mergeSort = (nums) => {
    // base case
    if (nums.length === 1) return nums
    const mid = (nums.length - 1) >> 1
    const left = mergeSort(nums.slice(0, mid + 1))
    const right = mergeSort(nums.slice(mid + 1))
    return merge(left, right)
  }
  const merge = (left, right) => {
    const arr = []
    const len1 = left.length
    const len2 = right.length
    const len = len1 + len2
    for (let i = 0; i < len1; i++) {
      let j = 0
      for (j = 0; j < len2; j++) {
        if (left[i] <= right[j] * 2) break
      }
      res += j
    }
    for (let i = 0, j = 0, k = 0; k < len; k++) {
      if (i === len1) {
        arr[k] = right[j++]
      } else if (j === len2) {
        arr[k] = left[i++]
      } else if (left[i] > right[j]) {
        arr[k] = right[j++]
      } else {
        arr[k] = left[i++]
      }
    }
    return arr
  }
  mergeSort(nums)
  return res
}
