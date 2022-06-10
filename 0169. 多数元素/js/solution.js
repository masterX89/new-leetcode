// Boyer-Moore Vote: https://www.cs.utexas.edu/~moore/best-ideas/mjrty/index.html
/**
 * @param {number[]} nums
 * @return {number}
 */

// Hash
// 时间 O(n) 空间 O(n)
var majorityElement = function (nums) {
  const frequency = {}
  for (const num of nums) {
    if (frequency[num]) frequency[num]++
    else frequency[num] = 1
  }
  for (const key in frequency) {
    if (frequency[key] > Math.floor(nums.length / 2)) return key
  }
}

// Sort
// 时间 O(nlogn) 空间 O(n)
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
}

// 分治 recurse
// 时间 O(nlogn) 空间 O(logn)
var majorityElement = function (nums) {
  function count(target, lo, hi) {
    let cnt = 0
    for (let i = lo; i <= hi; i++) {
      if (nums[i] === target) cnt++
    }
    return cnt
  }
  function recurse(lo, hi) {
    if (lo === hi) return nums[lo]
    let mid = (lo + hi) >> 1
    let leftMajor = recurse(lo, mid)
    let rightMajor = recurse(mid + 1, hi)
    if (count(leftMajor, lo, hi) > (hi - lo + 1) >> 1) return leftMajor
    if (count(rightMajor, lo, hi) > (hi - lo + 1) >> 1) return rightMajor
    return -1
  }
  return recurse(0, nums.length - 1)
}
