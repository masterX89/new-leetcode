/**
 * @param {number[][]} isConnected
 * @return {number}
 */
// [[1,1,0],[1,1,0],[0,0,1]]
var findCircleNum = function (isConnected) {
  const isVisited = new Set()
  const city = isConnected.length
  let res = 0
  const dfs = (isConnected, i, isVisited) => {
    for (let j = 0; j < city; j++) {
      if (isConnected[i][j] && !isVisited.has(j)) {
        isVisited.add(j)
        dfs(isConnected, j, isVisited)
      }
    }
  }

  for (let i = 0; i < city; i++) {
    if (!isVisited.has(i)) {
      dfs(isConnected, i, isVisited)
      res++
    }
  }
  return res
}
