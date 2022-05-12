/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序时间复杂度 O(nlogn)
var longestConsecutive = function (nums) {
  if (!nums.length) return 0
  nums.sort((a, b) => a - b)
  let res = 1
  let max = 1
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) continue
    if (nums[i] + 1 === nums[i + 1]) {
      res = Math.max(res, ++max)
    } else {
      max = 1
    }
  }
  return res
}

// O(n^2) TLE
var longestConsecutive = function (nums) {
  let res = 0
  let set = new Set(nums)
  for (const num of set) {
    let max = 0
    let curNum = num
    while (set.has(curNum++)) max++
    res = Math.max(max, res)
  }
  return res
}

var longestConsecutive = function (nums) {
  let res = 0
  let set = new Set(nums)
  for (const num of set) {
    let max = 0
    let curNum = num
    if (!set.has(num - 1)) {
      while (set.has(curNum++)) max++
    }
    res = Math.max(res, max)
  }
  return res
}
