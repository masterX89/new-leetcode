/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const sorted = new Array(nums1.length + nums2.length)
  for (let i = 0, j = 0, k = 0; k < sorted.length; k++) {
    if (i === nums1.length) sorted[k] = nums2[j++]
    else if (j === nums2.length) sorted[k] = nums1[i++]
    else sorted[k] = nums1[i] < nums2[j] ? nums1[i++] : nums2[j++]
  }
  const len = sorted.length
  return len % 2 === 0
    ? (sorted[parseInt(len / 2) - 1] + sorted[parseInt(len / 2)]) / 2
    : sorted[parseInt(len / 2)]
}

var findMedianSortedArrays = function (nums1, nums2) {
  const len = nums1.length + nums2.length
  let prev = (curr = null)
  for (let i = 0, j = 0, k = 0; k <= parseInt(len / 2); k++) {
    prev = curr
    if (i === nums1.length) curr = nums2[j++]
    else if (j === nums2.length) curr = nums1[i++]
    else curr = nums1[i] < nums2[j] ? nums1[i++] : nums2[j++]
  }
  return len % 2 === 0 ? (prev + curr) / 2 : curr
}

// TODO: O(log) 的解法
