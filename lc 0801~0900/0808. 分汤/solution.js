/**
 * @param {number} n
 * @return {number}
 */
// 定义 f[i][j] 为 汤A 剩余 i 毫升，汤 B 剩余 j 毫升时的最终概率
// 概率 = 汤 A 先分配完的概率 + 汤 A 和汤 B 同时分配完的概率 *0.5 概率
var soupServings = function (n) {
  n = Math.ceil(n / 25)
  if (n >= 179) return 1.0
  const memo = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))

  const dfs = (a, b) => {
    if (a <= 0 && b <= 0) return 0.5
    else if (a <= 0) return 1.0
    else if (b <= 0) return 0

    if (memo[a][b] === 0) {
      memo[a][b] =
        0.25 *
        (dfs(a - 4, b) +
          dfs(a - 3, b - 1) +
          dfs(a - 2, b - 2) +
          dfs(a - 1, b - 3))
    }

    return memo[a][b]
  }
  return dfs(n, n)
}
