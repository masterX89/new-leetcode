/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const n = nums.length
  let res = new Array(n).fill(-1)
  let st = []
  for (let i = 2 * n - 1; i >= 0; i--) {
    while (st.length !== 0 && st[st.length - 1] <= nums[i % n]) st.pop()
    res[i % n] = st.length === 0 ? -1 : st[st.length - 1]
    st.push(nums[i % n])
  }
  return res
}
