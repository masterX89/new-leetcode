// 思路 nums[i] 表示第 i 站时车上乘客数量
// val, i, j 乘客在 i 站上车, j - 1 站 下车
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const N = 1001
  const nums = new Array(N).fill(0)
  const diff = new Array(N).fill(0)
  diff[0] = nums[0]
  for (let i = 1; i < diff.length; i++) {
    diff[i] = nums[i] - nums[i - 1]
  }
  for (const trip of trips) {
    const val = trip[0]
    const i = trip[1]
    const j = trip[2] - 1
    diff[i] += val
    if (j + 1 < diff.length) diff[j + 1] -= val
  }
  const res = new Array(N).fill(0)
  res[0] = diff[0]
  for (let i = 1; i < res.length; i++) {
    res[i] = res[i - 1] + diff[i]
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] > capacity) return false
  }
  return true
}
