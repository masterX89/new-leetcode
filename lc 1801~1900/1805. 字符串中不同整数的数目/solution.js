/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  const map = new Map()
  let i = 0
  while (i < word.length) {
    let s = ''
    while (word[i] >= '0' && word[i++] <= '9') {
      s += word[i - 1]
    }
    if (s !== '') {
      const num = BigInt(s)
      const freq = map.get(num) || 0
      map.set(num, freq + 1)
    }
  }
  return map.size
}
