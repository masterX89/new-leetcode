/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let res = []
  let [l, r] = [1, 1]
  let sum = 0
  let window = []
  while (r <= Math.ceil(target / 2)) {
    r++
    sum += r - 1
    window.push(r - 1)
    while (sum > target) {
      sum -= l
      l++
      window.shift()
    }
    if (sum === target) res.push(window.slice())
  }
  return res
}
