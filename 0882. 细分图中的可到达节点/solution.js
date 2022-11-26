/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
var reachableNodes = function (edges, maxMoves, n) {
  let m = new Array(n).fill(0).map(() => new Array())
  let dist = new Array(n).fill(Number.MAX_SAFE_INTEGER)
  let arr = []
  let res = 0
  dist[0] = 0
  arr.push([0, 0])
  for (let i = 0; i < edges.length; i++) {
    const [u, v, cnt] = edges[i]
    m[u].push([v, cnt + 1])
    m[v].push([u, cnt + 1])
  }
  // 使用最短路径算法
  while (arr.length > 0) {
    let [v, d] = arr.shift()
    if (d > dist[v]) continue // 如果该节点的最短路径已经被更新到更小的值，则跳过该次计算
    for (let j = 0; j < m[v].length; j++) {
      // 遍历该节点的所有连接节点，如果其最短路径可以被更新，则将其重新放入队列中
      if (dist[m[v][j][0]] > dist[v] + m[v][j][1]) {
        dist[m[v][j][0]] = dist[v] + m[v][j][1]
        arr.push([m[v][j][0], dist[m[v][j][0]]])
      }
    }
  }
  // 计算路径上可以被覆盖的节点数量并添加到结果中
  for (let i = 0; i < edges.length; i++) {
    const [u, v, cnt] = edges[i]
    const a = Math.max(maxMoves - dist[u], 0)
    const b = Math.max(maxMoves - dist[v], 0)
    const c = Math.min(a + b, cnt)
    res += c
  }
  // 返回结果中还要添加上可以到达的编号节点的数量
  return res + dist.filter((v) => v <= maxMoves).length
}
