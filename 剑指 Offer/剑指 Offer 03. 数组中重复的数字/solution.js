/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let map = new Map()
  for (const num of nums) {
    const freq = map.get(num) || 0
    map.set(num, freq + 1)
    if (map.get(num) > 1) return num
  }
}
