const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let N = -1
let rows = []
let V = -1

rl.on('line', (data) => {
  if (N === -1) {
    N = parseInt(data.trim().split(' ')[0])
    V = parseInt(data.trim().split(' ')[1])
  } else {
    const v = parseInt(data.trim().split(' ')[0])
    const w = parseInt(data.trim().split(' ')[1])
    rows.push([v, w])
    if (rows.length === N) {
      const res = package01(N, V, rows)
      console.log(res)
    }
  }
})

// dp[i][v] [0, i - 1] 件物品时当前空间为 v 的价值
function package01(N, V, rows) {
  const dp = new Array(N + 1).fill(0).map(() => new Array(V + 1).fill(0))
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= V; j++) {
      const v = rows[i - 1][0]
      const w = rows[i - 1][1]
      if (v > j) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - v] + w)
      }
    }
  }
  return dp[N][V]
}
