/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let res = 0
  let visited = new Array(m).fill(0).map(() => new Array(n).fill(false))
  const digitSum = (num) => {
    let cnt = 0
    while (num > 0) {
      cnt += num % 10
      num = parseInt(num / 10)
    }
    return cnt
  }
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  const backtrack = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) return
    if (digitSum(i) + digitSum(j) > k) return
    visited[i][j] = true
    res++
    for (let [x, y] of directions) backtrack(i + x, j + y)
  }
  backtrack(0, 0)
  return res
}
