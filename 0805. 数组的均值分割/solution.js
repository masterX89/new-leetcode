/**
 * @param {number[]} nums
 * @return {boolean}
 */
// TODO: 0-1 背包之后还需要复盘
var splitArraySameAverage = function (nums) {
  const n = nums.length
  const m = parseInt(n / 2)
  if (n === 1) return false
  const sum = nums.reduce((prev, curr) => prev + curr, 0)
  nums = nums.map((val) => val * n - sum)

  const left = new Set()
  for (let i = 1; i < 1 << m; i++) {
    let total = 0
    for (let j = 0; j < m; j++) {
      if ((i & (1 << j)) !== 0) total += nums[j]
    }
    if (total === 0) return true
    left.add(total)
  }

  let rightSum = 0
  for (let i = m; i < n; i++) {
    rightSum += nums[i]
  }
  for (let i = 1; i < 1 << (n - m); i++) {
    let total = 0
    for (let j = m; j < n; j++) {
      if ((i & (1 << (j - m))) !== 0) total += nums[j]
    }
    if (total === 0 || (rightSum !== total && left.has(-total))) return true
  }
  return false
}
