/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const bitCount = (num) => {
  let cnt = 0
  while (num) {
    num &= num - 1
    cnt++
  }
  return cnt
}
var minimizeXor = function (num1, num2) {
  let c1 = bitCount(num1)
  let c2 = bitCount(num2)
  while (c2 < c1) {
    num1 &= num1 - 1
    c2++
  }
  while (c2 > c1) {
    num1 |= num1 + 1
    c2--
  }
  return num1
}
