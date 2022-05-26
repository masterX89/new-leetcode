/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let window = new Map()
  let need = new Map()
  for (const c of t) need.set(c, (need.get(c) || 0) + 1)
  let l = 0
  let r = 0
  // 判断 window 是否需要收缩
  let valid = 0
  // 记录 startIndex 和 len
  let start = 0
  let len = Infinity
  while (r < s.length) {
    const c = s[r]
    r++
    // 窗口内更新
    if (need.has(c)) {
      // window[c]++
      window.set(c, (window.get(c) || 0) + 1)
      if (window.get(c) === need.get(c)) valid++
    }
    // valid 与 need 长度相等尝试 shrink
    while (valid === need.size) {
      // shrink 前更新
      if (r - l < len) {
        start = l
        len = r - l
      }
      const d = s[l]
      l++
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--
        window.set(d, window.get(d) - 1)
      }
    }
  }
  return len === Infinity ? '' : s.substring(start, start + len)
}
