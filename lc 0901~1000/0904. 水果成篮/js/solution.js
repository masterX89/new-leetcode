/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let res = 0
  let window = new Map()
  let l = 0
  let r = 0
  while (r < fruits.length) {
    const c = fruits[r]
    r++
    const freq = window.get(c) || 0
    window.set(c, freq + 1)
    while (window.size > 2) {
      const d = fruits[l]
      l++
      window.set(d, window.get(d) - 1)
      if (window.get(d) === 0) window.delete(d)
    }
    res = Math.max(r - l, res)
  }
  return res
}
