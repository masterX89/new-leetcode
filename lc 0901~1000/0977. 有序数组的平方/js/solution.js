/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n+nlogn)
var sortedSquares = function (nums) {
  return nums.map((num) => num * num).sort((a, b) => a - b)
}

// O(n)
// 双指针
var sortedSquares = function (nums) {
  const len = nums.length
  let [l, r] = [0, len - 1]
  let k = len - 1
  let res = new Array(len).fill(0)
  while (l <= r) {
    const left = nums[l] * nums[l]
    const right = nums[r] * nums[r]
    if (left > right) {
      res[k--] = left
      l++
    } else {
      res[k--] = right
      r--
    }
  }
  return res
}
