/**
 * @param {character[][]} board
 * @return {boolean}
 */
const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]
var isValidSudoku = function (board) {
  const isValidRow = (row, board) => {
    const map = {}
    for (let col = 0; col < 9; col++) {
      if (board[row][col] !== '.') {
        if (map[board[row][col]]) {
          return false
        } else {
          map[board[row][col]] = 1
        }
      }
    }
    return true
  }
  const isValidCol = (col, board) => {
    const map = {}
    for (let row = 0; row < 9; row++) {
      if (board[row][col] !== '.') {
        if (map[board[row][col]]) {
          return false
        } else {
          map[board[row][col]] = 1
        }
      }
    }
    return true
  }
  const isValidMap = (x, y, board) => {
    const map = {}
    for (let row = x; row < x + 3; row++) {
      for (let col = y; col < y + 3; col++) {
        if (board[row][col] !== '.') {
          if (map[board[row][col]]) {
            return false
          } else {
            map[board[row][col]] = 1
          }
        }
      }
    }
    return true
  }
  for (let row = 0; row < 9; row++) {
    if (!isValidRow(row, board)) return false
  }
  for (let col = 0; col < 9; col++) {
    if (!isValidCol(col, board)) return false
  }
  for (let x = 0; x < 9; x += 3) {
    for (let y = 0; y < 9; y += 3) {
      if (!isValidMap(x, y, board)) return false
    }
  }
  return true
}

console.log(isValidSudoku(board))
