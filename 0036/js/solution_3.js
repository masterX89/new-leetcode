var isValidSudoku = function (board) {
  let rows = {}
  let cols = {}
  let boxes = {}
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] !== '.') {
        const num = Number(board[row][col])
        const rowKey = `${row}_${num}`
        const colKey = `${col}_${num}`
        const boxKey = `${Math.floor(row / 3)}_${Math.floor(col / 3)}_${num}`
        if (rows[rowKey] || cols[colKey] || boxes[boxKey]) {
          return false
        }
        rows[rowKey] = 1
        cols[colKey] = 1
        boxes[boxKey] = 1
      }
    }
  }
  return true
}
