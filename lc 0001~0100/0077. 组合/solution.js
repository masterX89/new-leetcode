/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []
  const track = []
  const backtrack = (start) => {
    // base case
    if (track.length === k) {
      res.push(track.slice())
      return
    }
    for (let i = start; i <= n; i++) {
      track.push(i)
      backtrack(i + 1)
      track.pop()
    }
  }
  backtrack(1)
  return res
}
