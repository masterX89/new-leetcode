const _ = require('lodash')
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let map = new Map()
  for (const ch of s) {
    const freq = map.get(ch) || 0
    map.set(ch, freq + 1)
  }
  for (const key of map.keys()) {
    if (map.get(key) === 1) return key
  }
  return ' '
}

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const freq = _.countBy(s)
  for (const [i, ch] of Array.from(s).entries()) {
    if (freq[ch] === 1) return ch
  }
  return ' '
}
