/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  for (let i = 1; i <= n; i++) {
    const num1 = parseInt(((1 + i) * i) / 2)
    const num2 = parseInt(((i + n) * (n - i + 1)) / 2)
    if (num1 === num2) return i
  }
  return -1
}
