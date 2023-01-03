/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
  let row = [poured]
  for (let i = 1; i <= query_row; i++) {
    let nextRow = new Array(i + 1).fill(0)
    for (let j = 0; j < i; j++) {
      const volume = row[j]
      if (volume > 1) {
        nextRow[j] += (volume - 1) / 2
        nextRow[j + 1] += (volume - 1) / 2
      }
    }
    row = nextRow
  }
  return Math.min(row[query_glass], 1)
}
