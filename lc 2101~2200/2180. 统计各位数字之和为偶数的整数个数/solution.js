/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let res = 0
  const getDigitSum = (num) => {
    let sum = 0
    while (num > 0) {
      sum += num % 10
      num = parseInt(num / 10)
    }
    return sum
  }
  for (let i = 1; i <= num; i++) {
    res += getDigitSum(i) % 2 === 0
  }
  return res
}
