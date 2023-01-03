/**
 * @param {number[][]} dungeon
 * @return {number}
 */
// dp[i][j] 记录 dungeon[i][j] 到终点需要的血量
var calculateMinimumHP = function (dungeon) {
  const n = dungeon.length
  const m = dungeon[0].length
  const dp = new Array(n).fill(0).map(() => new Array(m).fill(0))

  const getHP = (prev, i, j) => {
    const hp = prev - dungeon[i][j]
    return hp <= 0 ? 1 : hp
  }

  dp[n - 1][m - 1] = getHP(1, n - 1, m - 1)
  for (let i = n - 2; i >= 0; i--) {
    dp[i][m - 1] = getHP(dp[i + 1][m - 1], i, m - 1)
  }
  for (let j = m - 2; j >= 0; j--) {
    dp[n - 1][j] = getHP(dp[n - 1][j + 1], n - 1, j)
  }
  for (let i = n - 2; i >= 0; i--) {
    for (let j = m - 2; j >= 0; j--) {
      dp[i][j] = getHP(Math.min(dp[i + 1][j], dp[i][j + 1]), i, j)
    }
  }
  return dp[0][0]
}
