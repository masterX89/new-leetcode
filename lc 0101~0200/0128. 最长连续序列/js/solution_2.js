/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0

  const set = new Set(nums)
  let res = 1
  for (const num of set) {
    if (!set.has(num - 1)) {
      let max = 1
      let curNum = num
      while (set.has(curNum + 1)) {
        curNum++
        max++
      }
      res = Math.max(res, max)
    }
  }
  return res
}
