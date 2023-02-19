/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  return n && n + sumNums(n - 1)
}
