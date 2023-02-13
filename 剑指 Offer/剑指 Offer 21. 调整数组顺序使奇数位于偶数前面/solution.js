/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  const n = nums.length
  let res = new Array(n).fill(0)
  let l = 0
  let r = n - 1
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 !== 0) res[l++] = nums[i]
    else res[r--] = nums[i]
  }
  return res
}
