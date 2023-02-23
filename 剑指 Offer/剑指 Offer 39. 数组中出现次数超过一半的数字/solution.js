/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let cnt = 0
  for (const num of nums) {
    if (cnt === 0) res = num
    cnt += num === res ? 1 : -1
  }
  return res
}
