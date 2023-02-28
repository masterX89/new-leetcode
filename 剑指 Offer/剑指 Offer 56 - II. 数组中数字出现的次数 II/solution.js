/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map()
  for (const num of nums) {
    const freq = map.get(num) || 0
    map.set(num, freq + 1)
  }
  for (const [key, value] of map) {
    if (value === 1) return key
  }
}
