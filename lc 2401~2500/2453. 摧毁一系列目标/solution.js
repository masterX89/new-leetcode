/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
var destroyTargets = function (nums, space) {
  const map = new Map()
  for (const num of nums) {
    const remainders = map.get(num % space) || []
    remainders.push(num)
    map.set(num % space, remainders)
  }
  let res = Infinity
  let maxLen = 0
  for (const remainders of map.values()) {
    const len = remainders.length
    const min = Math.min(...remainders)
    if (len > maxLen || (len === maxLen && min < res)) {
      maxLen = len
      res = min
    }
  }
  return res
}
