/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
  const MOD = 10 ** 9 + 7
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

  const lcm = parseInt((a * b) / gcd(a, b))
  let l = 0
  let r = Math.min(a, b) * n
  while (l <= r) {
    // TODO: 为什么这个会 TLE
    // let c = l + ((r - l) >> 1)
    let c = parseInt((l + r) / 2)
    if (parseInt(c / a) + parseInt(c / b) - parseInt(c / lcm) >= n) r = c - 1
    else l = c + 1
  }
  return l % MOD
}
