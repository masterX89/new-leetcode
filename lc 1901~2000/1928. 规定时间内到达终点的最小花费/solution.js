/**
 * @param {number} maxTime
 * @param {number[][]} edges
 * @param {number[]} passingFees
 * @return {number}
 */
// dp[i][j] 为 i 时间到达 j 城市的最小 passingFee 之和
var minCost = function (maxTime, edges, passingFees) {
  const n = passingFees.length
  const dp = new Array(maxTime + 1)
    .fill(0)
    .map(() => new Array(n).fill(Infinity))
  // base case
  dp[0][0] = passingFees[0]
  for (let i = 1; i <= maxTime; i++) {
    for (const edge of edges) {
      let [x, y, time] = edge
      if (i - time >= 0) {
        dp[i][x] = Math.min(dp[i][x], dp[i - time][y] + passingFees[x])
        dp[i][y] = Math.min(dp[i][y], dp[i - time][x] + passingFees[y])
      }
    }
  }
  let res = Infinity
  for (let i = 0; i <= maxTime; i++) res = Math.min(res, dp[i][n - 1])
  return res === Infinity ? -1 : res
}
