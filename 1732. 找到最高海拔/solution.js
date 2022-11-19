/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  const n = gain.length
  const heights = new Array(n + 1).fill(0)
  let res = 0
  heights[0] = 0
  for (let i = 1; i < n + 1; i++) {
    heights[i] = heights[i - 1] + gain[i - 1]
    res = Math.max(res, heights[i])
  }
  return res
}
