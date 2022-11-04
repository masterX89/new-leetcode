/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  target = Math.abs(target)
  let sum = (i = 0)
  while (sum < target || sum % 2 !== target % 2) {
    i++
    sum += i
  }
  return i
}
