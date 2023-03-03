/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  const MOD = BigInt(Math.pow(10, 9) + 7)
  if (n <= 3) return n - 1
  const num = Math.floor(n / 3)
  const remainder = n % 3
  let res = 1n
  if (remainder === 0) {
    for (let i = 1; i <= num; i++) res = (res * 3n) % MOD
  } else if (remainder === 1) {
    for (let i = 1; i <= num - 1; i++) res = (res * 3n) % MOD
    res = (res * 4n) % MOD
  } else if (remainder === 2) {
    for (let i = 1; i <= num; i++) res = (res * 3n) % MOD
    res = (res * 2n) % MOD
  }
  return res
}
