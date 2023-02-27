/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = []
  let [l, r] = [0, 0]
  // 单调队列
  let q = []
  while (r < nums.length) {
    r++
    while (q.length > 0 && nums[r - 1] > nums[q[q.length - 1]]) q.pop()
    q.push(r - 1)
    while (r - l > k) {
      l++
      if (l > q[0]) q.shift()
    }
    if (r - l === k) res.push(nums[q[0]])
  }
  return res
}
