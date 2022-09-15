/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()
  for (const str of strs) {
    const key = str.split('').sort().join('')
    const freq = map.get(key) || []
    freq.push(str)
    map.set(key, freq)
  }
  return [...map.values()]
}
