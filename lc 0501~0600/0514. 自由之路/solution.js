/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
// d[i][j]: 当指针指向ring[i]时，拼写key[j:]的最小步数
var findRotateSteps = function (ring, key) {
  const m = ring.length
  const n = key.length
  const dict = new Map()
  for (let i = 0; i < m; i++) {
    const ch = ring[i]
    if (!dict.has(ch)) {
      dict.set(ch, [i])
    } else {
      dict.get(ch).push(i)
    }
  }
  const dp = new Array(m).fill(0).map(() => new Array(n + 1).fill(Infinity))
  // base case: dp[i][n] = 0
  for (let i = 0; i < m; i++) dp[i][n] = 0

  for (let j = n - 1; j >= 0; j--) {
    for (let i = m - 1; i >= 0; i--) {
      const pos = dict.get(key[j])
      for (const k of pos) {
        const step = Math.min(Math.abs(i - k), Math.abs(m - Math.abs(i - k)))
        dp[i][j] = Math.min(dp[i][j], dp[k][j + 1] + step + 1)
      }
    }
  }
  return dp[0][0]
}
