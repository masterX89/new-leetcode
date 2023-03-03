/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let dp = new Array(n + 1).fill(1)
  dp[0] = 1
  dp[1] = 1
  let i = (j = k = 1)
  for (let p = 2; p <= n; p++) {
    const n1 = dp[i] * 2
    const n2 = dp[j] * 3
    const n3 = dp[k] * 5
    dp[p] = Math.min(n1, n2, n3)
    if (dp[p] === n1) i++
    if (dp[p] === n2) j++
    if (dp[p] === n3) k++
  }
  return dp[n]
}
