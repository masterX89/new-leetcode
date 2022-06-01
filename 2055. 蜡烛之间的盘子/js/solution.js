/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
// TLE
var platesBetweenCandles = function (s, queries) {
  let res = []
  for (const query of queries) {
    const [l, r] = query
    const subStr = s.slice(l, r + 1)
    const [firstIndex, lastIndex] = [
      // O(n^2)
      subStr.indexOf('|'),
      subStr.lastIndexOf('|'),
    ]
    if (firstIndex !== -1 && lastIndex !== -1) {
      const content = subStr.slice(firstIndex + 1, lastIndex)
      const len = content.split('').filter((item) => item === '*').length
      res.push(len)
    } else {
      res.push(0)
    }
  }
  return res
}
