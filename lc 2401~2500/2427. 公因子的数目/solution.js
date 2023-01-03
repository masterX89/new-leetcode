/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// 暴力
var commonFactors = function (a, b) {
  let res = 0
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) res += 1
  }
  return res
}

// O(min(a,b))
// 1e9
var commonFactors = function (a, b) {
  const gcd = (a, b) => {
    if (b === 0) return a
    return gcd(b, a % b)
  }
  let res = 0
  const g = gcd(a, b)
  let i = 1
  while (i * i <= g) {
    if (g % i === 0) {
      res++
      if (i * i < g) res++
    }
    i++
  }
  return res
}
