/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let res = 0
  let l1 = 0
  let l2 = 0
  let sum1 = 0
  let sum2 = 0
  let r = 0
  while (r < nums.length) {
    const c = nums[r]
    r++
    sum1 += c
    sum2 += c
    // shrink 至 sum1 === goal
    while (sum1 > goal && l1 < r) {
      const d = nums[l1]
      l1++
      sum1 -= d
    }
    // shrink 至 sum2 < goal
    while (sum2 >= goal && l2 < r) {
      const d = nums[l2]
      l2++
      sum2 -= d
    }
    res += l2 - l1
  }
  return res
}
// case: [1, 0, 0, 1, 1], 2
// [1, 0, 0, 1, 1]
//  l1 l2       r    
// [1, 0, 0, 1, 1]
//     l1       l2 r
// 我的滑动窗口区间一般采用 左闭右开
// 本题关键在于 shrink 条件有两个 -> 大于 goal 和 大于等于 goal
// 收缩后的 l2 - l1 即为本轮 r 下的个数