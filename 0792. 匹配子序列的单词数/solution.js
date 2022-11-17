/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let res = 0
  for (const word of words) {
    let i = (j = 0)
    while (i < word.length && j < s.length) {
      if (word[i] === s[j]) i++
      j++
    }
    res += i === word.length
  }
  return res
}
