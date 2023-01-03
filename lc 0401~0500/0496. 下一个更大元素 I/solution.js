/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let st = []
  let res = []
  const map = new Map()
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (st.length !== 0 && nums2[i] >= st[st.length - 1]) st.pop()
    map.set(nums2[i], st.length === 0 ? -1 : st[st.length - 1])
    st.push(nums2[i])
  }
  for (const num of nums1) {
    res.push(map.get(num))
  }
  return res
}
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
