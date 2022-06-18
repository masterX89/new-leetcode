/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let loop = (mid = Math.floor(n / 2))
  let [startX, startY] = [0, 0]
  let [count, offset] = [1, 1]
  while (loop--) {
    let [row, col] = [startX, startY]
    for (; col < startY + n - offset; col++) res[row][col] = count++
    for (; row < startX + n - offset; row++) res[row][col] = count++
    for (; col > startY; col--) res[row][col] = count++
    for (; row > startX; row--) res[row][col] = count++
    startX++
    startY++
    offset += 2
  }
  if (n % 2 === 1) res[mid][mid] = count
  return res
}
