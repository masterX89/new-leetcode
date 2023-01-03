/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarrayGCD = function (nums, k) {
  const gcd = (a, b) => {
    if (a % b === 0) return b
    return gcd(b, a % b)
  }
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    for (let j = i; j < nums.length; j++) {
      num = gcd(num, nums[j])
      if (num < k) break
      else if (num === k) res++
    }
  }
  return res
}
