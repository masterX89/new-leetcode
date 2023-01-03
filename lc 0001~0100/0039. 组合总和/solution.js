/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []
  const backtrack = (track, start) => {
    const sum = track.reduce((prev, curr) => prev + curr, 0)
    if (sum > target) return
    if (sum === target) {
      res.push(track.slice())
      return
    }
    for (let i = start; i < candidates.length; i++) {
      track.push(candidates[i])
      backtrack(track, i)
      track.pop()
    }
  }
  backtrack([], 0)
  return res
}
