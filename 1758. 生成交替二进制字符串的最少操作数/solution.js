/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let cnt = 0
  for (let i = 0; i < s.length; i++) {
    const c = String.fromCharCode('0'.charCodeAt() + (i % 2))
    if (s[i] !== c) cnt++
  }
  return Math.min(cnt, s.length - cnt)
}
