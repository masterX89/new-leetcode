/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let res = []
  const window = new Map()
  const need = new Map()
  for (const c of p) {
    const freq = need.get(c) || 0
    need.set(c, freq + 1)
  }
  let l = 0
  let r = 0
  let valid = 0
  while (r < s.length) {
    const c = s[r]
    r++
    if (need.has(c)) {
      const freq = window.get(c) || 0
      window.set(c, freq + 1)
      if (window.get(c) === need.get(c)) valid++
    }
    while (r - l >= p.length) {
      if (valid === need.size) res.push(l)
      const d = s[l]
      l++
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--
        window.set(d, window.get(d) - 1)
      }
    }
  }
  return res
}
