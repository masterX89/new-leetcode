/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var makeIntegerBeautiful = function (n, target) {
  const perfectSum = (num) => {
    let sum = 0
    while (num !== 0) {
      sum += num % 10
      num = parseInt(num / 10)
    }
    return sum
  }
  const num = n
  let step = 1
  while (perfectSum(n) > target) {
    n = (parseInt(n / step) + 1) * step
    step *= 10
  }
  return n - num
}
