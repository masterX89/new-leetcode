/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const helper = (n) => {
    if (n === 0) return 1.0
    const y = helper(Math.floor(n / 2))
    return n % 2 === 0 ? y * y : y * y * x
  }
  return n >= 0 ? helper(n) : 1 / helper(-n)
}
