/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let k = 1
  for (; k <= parseInt(sequence.length / word.length); k++) {
    if (!sequence.includes(word.repeat(k))) break
  }
  return k - 1
}
// TODO: dp
