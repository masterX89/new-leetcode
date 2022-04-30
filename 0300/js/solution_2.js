// 贪心解法
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) return []

  let n = nums.length
  let d = new Array(n + 1).fill(0)
  let len = 1
  d[len] = nums[0]
  for (let i = 1; i < n; i++) {
    if (d[len] < nums[i]) {
      d[++len] = nums[i]
    } else {
      let j
      for (j = 1; j <= len; j++) {
        if (d[j] >= nums[i]) {
          break
        }
      }
      d[j] = nums[i]
    }
  }
  return len
}
