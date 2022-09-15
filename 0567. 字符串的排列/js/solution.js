/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let window = new Map()
  let need = new Map()
  for (const c of s1) {
    const freq = need.get(c) || 0
    need.set(c, freq + 1)
  }
  let l = 0
  let r = 0
  let valid = 0
  while (r < s2.length) {
    const c = s2[r]
    r++
    if (need.has(c)) {
      const freq = window.get(c) || 0
      window.set(c, freq + 1)
      if (window.get(c) === need.get(c)) valid++
    }
    while (r - l >= s1.length) {
      if (valid === need.size) return true
      const d = s2[l]
      l++
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--
        window.set(d, window.get(d) - 1)
      }
    }
  }
  return false
}

console.log(checkInclusion('abcdxabcde', 'abcdeabcdx'))
