/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  let res = []
  const array = s.split('')
  const n = array.length
  let used = new Array(n).fill(false)
  const backtrack = (track) => {
    if (track.length === n) {
      res.push(track.slice().join(''))
      return
    }
    for (let i = 0; i < n; i++) {
      if (used[i]) continue
      if (i > 0 && array[i] === array[i - 1] && !used[i - 1]) continue
      used[i] = true
      track.push(array[i])
      backtrack(track)
      track.pop()
      used[i] = false
    }
  }
  array.sort((a, b) => a.charCodeAt() - b.charCodeAt())
  backtrack([])
  return res
}
