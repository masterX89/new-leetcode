const board = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
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
  const rowNum = 9,
    colNum = 9
  let rows = new Array(rowNum).fill(0).map(() => new Array(rowNum).fill(0))
  let cols = new Array(colNum).fill(0).map(() => new Array(colNum).fill(0))
  let maps = new Array(Math.floor(rowNum / 3))
    .fill(0)
    .map(() =>
      new Array(Math.floor(colNum / 3)).fill(0).map(() => new Array(9).fill(0))
    )

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      if (board[row][col] !== '.') {
        // offset - 1
        const num = Number(board[row][col]) - 1
        rows[row][num]++
        cols[col][num]++
        maps[Math.floor(row / 3)][Math.floor(col / 3)][num]++
        if (
          rows[row][num] > 1 ||
          cols[col][num] > 1 ||
          maps[Math.floor(row / 3)][Math.floor(col / 3)][num] > 1
        ) {
          return false
        }
      }
    }
  }
  return true
}
console.log(isValidSudoku(board))
