/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 归并排序
var sortArray = function (nums) {
  const mergeSort = (nums) => {
    if (nums.length === 1) return nums
    const mid = (nums.length - 1) >> 1
    const left = mergeSort(nums.slice(0, mid + 1))
    const right = mergeSort(nums.slice(mid + 1))
    return merge(left, right)
  }
  const merge = (nums1, nums2) => {
    let i = (j = 0)
    let nums = []
    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
        nums.push(nums1[i++])
      } else {
        nums.push(nums2[j++])
      }
    }
    while (i < nums1.length) {
      nums.push(nums1[i++])
    }
    while (j < nums2.length) {
      nums.push(nums2[j++])
    }
    return nums
  }
  return mergeSort(nums)
}
