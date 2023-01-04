/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
// 问题等价: 最多 k∈[0,n) 个节点中转等价为最多 k + 1 条边
// dp[i][j] src 经过 i 条边到达 j 的最小 price
var findCheapestPrice = function (n, flights, src, dst, k) {
  const dp = new Array(k + 2).fill(0).map(() => new Array(n).fill(Infinity))
  // base case
  for (let i = 0; i <= k + 1; i++) dp[i][src] = 0
  for (let i = 1; i <= k + 1; i++) {
    for (const flight of flights) {
      const [from, to, price] = flight
      dp[i][to] = Math.min(dp[i][to], dp[i - 1][from] + price)
    }
  }
  return dp[k + 1][dst] === Infinity ? -1 : dp[k + 1][dst]
}
