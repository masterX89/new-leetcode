// 贪心+二分
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
      let l = 1
      let r = len
      let j = 1
      while (l <= r) {
        let mid = ((r - l) >> 1) + l
        if (d[mid] < nums[i]) {
          // 二分开区间
          j = mid + 1
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
      d[j] = nums[i]
    }
  }
  return len
}
