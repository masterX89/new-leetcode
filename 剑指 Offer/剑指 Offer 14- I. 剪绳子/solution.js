/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n <= 3) return n - 1
  const num = Math.floor(n / 3)
  const remainder = n % 3
  if (remainder === 0) return Math.pow(3, num)
  else if (remainder === 1) return Math.pow(3, num - 1) * 4
  else if (remainder === 2) return Math.pow(3, num) * 2
}
