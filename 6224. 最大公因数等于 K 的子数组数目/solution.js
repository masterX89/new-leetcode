/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayGCD = function (nums, k) {
  const getGCD = (nums) => {
    return nums.reduce((prev, curr) => gcd(prev, curr), nums[0])
  }
  const gcd = (a, b) => {
    if (a % b === 0) return b
    return gcd(b, a % b)
  }
  let res = 0
  for (let start = 0; start < nums.length; start++) {
    for (let end = start + 1; end <= nums.length; end++) {
      const copy = nums.slice(start, end)
      if (getGCD(copy) < k) break
      if (getGCD(copy) === k) res++
    }
  }
  return res
}

subarrayGCD([3, 12, 9, 6], 3)
