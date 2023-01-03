/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
O(nk)
var maxSlidingWindow = function (nums, k) {
  if (!nums.length) return []
  let [l, r] = [0, 0]
  let res = []
  while (r < nums.length) {
    r++
    while (r - l > k) l++
    if (r - l === k) {
      res.push(Math.max(...nums.slice(l, r)))
    }
  }
  return res
}

// O(n)
// 我的滑动窗口为左闭右开
var maxSlidingWindow = function (nums, k) {
  let [l, r] = [0, 0]
  let res = []
  // q 维护一个队首最大的 index 队列
  let q = []
  while (r < nums.length) {
    r++
    // 更新: 队尾小于等于窗口右侧值时 队尾出队
    while (q.length && nums[q[q.length - 1]] <= nums[r - 1]) q.pop()
    q.push(r - 1)
    // shrink
    while (r - l > k) {
      l++
      // 更新: 队首不在窗口中时需要出队
      if (q[0] < l) q.shift()
    }
    if (r - l === k) res.push(nums[q[0]])
  }
  return res
}
