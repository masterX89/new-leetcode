/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0
  let window = new Map()
  let l = 0
  let r = 0
  while (r < s.length) {
    const c = s[r]
    r++
    const freq = window.get(c) || 0
    window.set(c, freq + 1)
    while (window.get(c) > 1) {
      const d = s[l]
      l++
      window.set(d, window.get(d) - 1)
    }
    res = Math.max(res, r - l)
  }
  return res
}
