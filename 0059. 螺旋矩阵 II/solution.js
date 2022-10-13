/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const res = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let num = 1
  let l = (u = 0)
  let r = (d = n - 1)
  while (num <= n * n) {
    for (let i = u, j = l; u <= d && j <= r; j++) res[i][j] = num++
    u++
    for (let i = u, j = r; l <= r && i <= d; i++) res[i][j] = num++
    r--
    for (let i = d, j = r; u <= d && j >= l; j--) res[i][j] = num++
    d--
    for (let i = d, j = l; l <= r && i >= u; i--) res[i][j] = num++
    l++
  }
  return res
}
