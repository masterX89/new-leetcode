/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = []
  const board = new Array(n).fill(0).map(() => new Array(n).fill('.'))
  const isValid = (board, row, col) => {
    for (let i = 0, j = col; i < row; i++) {
      if (board[i][j] === 'Q') return false
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false
    }
    return true
  }
  const backtrack = (board, row) => {
    if (row === n) {
      const newBoard = board.map((val) => val.join(''))
      res.push(newBoard)
      return
    }
    for (let col = 0; col < n; col++) {
      // board[row][col]
      if (!isValid(board, row, col)) continue
      board[row][col] = 'Q'
      backtrack(board, row + 1)
      board[row][col] = '.'
    }
  }
  backtrack(board, 0)
  return res
}
