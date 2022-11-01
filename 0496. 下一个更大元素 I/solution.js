/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// O(n^2) 暴力
var nextGreaterElement = function (nums1, nums2) {
  let res = []
  for (const num1 of nums1) {
    let start = 0
    while (start < nums2.length && num1 !== nums2[start]) start++
    let i = 0
    for (i = start + 1; i < nums2.length; i++) {
      if (nums2[i] > num1) {
        res.push(nums2[i])
        break
      }
    }
    if (i === nums2.length) res.push(-1)
  }
  return res
}
