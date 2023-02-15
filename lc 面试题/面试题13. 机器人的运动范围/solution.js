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
    res++
    for (let [x, y] of directions) {
      if (
        i + x >= 0 &&
        i + x < m &&
        j + y >= 0 &&
        j + y < n &&
        !visited[i + x][j + y] &&
        digitSum(i + x) + digitSum(j + y) <= k
      ) {
        visited[i + x][j + y] = true
        backtrack(i + x, j + y)
      }
    }
  }
  if (k === 0) return 1
  visited[0][0] = true
  backtrack(0, 0)
  return res
}
