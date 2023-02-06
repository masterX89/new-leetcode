/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if (i !== nums[i]) return i
  }
  return n
}

var missingNumber = function (nums) {
  let res = -1
  const n = nums.length
  let [l, r] = [0, n - 1]
  while (l <= r) {
    let c = l + ((r - l) >> 1)
    if (c === nums[c]) l = c + 1
    else r = c - 1
  }
  return l
}
