/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length
  const n = board[0].length
  let res = false
  let visited = new Array(m).fill(0).map(() => new Array(n).fill(false))
  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  const backtrack = (track, i, j) => {
    if (track === word) res = true
    if (res || !word.startsWith(track)) return
    for (let [x, y] of direction) {
      if (
        i + x >= 0 &&
        i + x < m &&
        j + y >= 0 &&
        j + y < n &&
        !visited[i + x][j + y]
      ) {
        visited[i + x][j + y] = true
        backtrack(track + board[i + x][j + y], i + x, j + y)
        visited[i + x][j + y] = false
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      visited[i][j] = true
      backtrack(board[i][j], i, j)
      visited[i][j] = false
    }
  }
  return res
}
