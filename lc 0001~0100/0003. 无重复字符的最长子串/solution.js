/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0
  let l = (r = 0)
  const window = new Map()
  while (r < s.length) {
    const c = s[r]
    r++
    const freq = window.get(c) || 0
    window.set(c, freq + 1)
    while (window.get(c) > 1) {
      const d = s[l]
      l++
      const freq = window.get(d)
      window.set(d, freq - 1)
    }
    res = Math.max(res, r - l)
  }
  return res
}
