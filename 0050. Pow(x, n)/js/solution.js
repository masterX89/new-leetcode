/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1
  if (n < 0) return 1 / myPow(x, -n)
  if (n % 2 === 1) return x * myPow(x, n - 1)
  return myPow(x * x, Math.floor(n / 2))
}
console.log(myPow(2.0, 10))
