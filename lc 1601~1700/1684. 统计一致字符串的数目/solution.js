/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let res = 0
  const allowedSet = new Set()
  const isValid = (word) => {
    for (const ch of word) {
      if (!allowedSet.has(ch)) return false
    }
    return true
  }
  for (const ch of allowed) {
    allowedSet.add(ch)
  }
  for (const word of words) {
    if (isValid(word)) res++
  }
  return res
}
