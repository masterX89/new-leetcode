/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = []
  const backtrack = (track, start) => {
    // base case
    const sum = track.reduce((prev, curr) => prev + curr, 0)
    if (sum === target) {
      res.push(track.slice())
      return
    }
    if (sum > target) return
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue
      track.push(candidates[i])
      backtrack(track, i + 1)
      track.pop()
    }
  }
  candidates.sort((a, b) => a - b)
  backtrack([], 0)
  return res
}
