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
  const backtrack = (track, i, j, k) => {
    if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) return
    if (board[i][j] !== word.charAt(k)) return
    if (res) return
    visited[i][j] = true
    track.push(board[i][j])
    if (track.join('') === word) res = true
    for (let [x, y] of direction) {
      backtrack(track, i + x, j + y, k + 1)
    }
    track.pop()
    visited[i][j] = false
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      backtrack([], i, j, 0)
    }
  }
  return res
}
