/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const LEN = 10
  let l = (r = 0)
  const res = []
  const window = new Map()
  while (r < s.length) {
    r++
    while (r - l > LEN) l++
    // update res
    if (r - l === LEN) {
      const subStr = s.substring(l, r)
      const freq = window.get(subStr) || 0
      window.set(subStr, freq + 1)
      if (window.get(subStr) === 2) res.push(subStr)
    }
  }
  return res
}
