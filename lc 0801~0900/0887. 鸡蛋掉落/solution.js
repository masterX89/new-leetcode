/**
 * @param {number} k
 * @param {number} n
 * @return {number} dp[k][n]
 */
// 最坏情况是指: 鸡蛋破碎一定发生在搜索区间的穷尽时
// dp[i][j] 指的是 i 个蛋在 j 层楼时确定 f 的最小操作次数
var superEggDrop = function (k, n) {
  const dp = new Array(k + 1).fill(0).map(() => new Array(n + 1).fill(Infinity))
  for (let i = 0; i <= k; i++) dp[i][0] = 0
  for (let j = 1; j <= n; j++) dp[1][j] = j
  for (let i = 2; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      // TLE
      for (let x = 1; x <= j; x++) {
        dp[i][j] = Math.min(
          dp[i][j],
          1 + Math.max(dp[i - 1][x - 1], dp[i][j - x])
        )
      }
    }
  }
  return dp[k][n]
}
