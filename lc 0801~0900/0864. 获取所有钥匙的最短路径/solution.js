/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  let n = grid.length,
    m = grid[0].length,
    cnt = 0
  const dist = []
  for (let i = 0; i < n; i++) {
    dist[i] = []
    for (let j = 0; j < m; j++) {
      dist[i][j] = new Array(1 << 10).fill(0x3f3f3f3f)
    }
  }
  const d = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == '@') {
        d.push([i, j, 0])
        dist[i][j][0] = 0
      } else if (grid[i][j] >= 'a' && grid[i][j] <= 'z') cnt++
    }
  }
  while (d.length > 0) {
    const info = d.shift()
    const x = info[0],
      y = info[1],
      cur = info[2],
      step = dist[x][y][cur]
    for (const di of dirs) {
      const nx = x + di[0],
        ny = y + di[1]
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue
      const c = grid[nx][ny]
      if (c == '#') continue
      if (
        'A' <= c &&
        c <= 'Z' &&
        ((cur >> (c.charCodeAt(0) - 'A'.charCodeAt(0))) & 1) == 0
      )
        continue
      let ncur = cur
      if ('a' <= c && c <= 'z')
        ncur |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0))
      if (ncur == (1 << cnt) - 1) return step + 1
      if (step + 1 >= dist[nx][ny][ncur]) continue
      d.push([nx, ny, ncur])
      dist[nx][ny][ncur] = step + 1
    }
  }
  return -1
}
