/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const need = new Map()
  for (const c of t) {
    const freq = need.get(c) || 0
    need.set(c, freq + 1)
  }
  for (const c of s) {
    const freq = need.get(c) || 0
    need.set(c, freq - 1)
    if (need.get(c) < 0) return false
  }
  return true
}
