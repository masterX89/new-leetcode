/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const map = new Map()
  const getNum = (num) => {
    let cnt = 0
    while (num !== 0) {
      cnt += num % 10
      num = parseInt(num / 10)
    }
    return cnt
  }
  for (let i = lowLimit; i <= highLimit; i++) {
    const freq = map.get(getNum(i)) || 0
    map.set(getNum(i), freq + 1)
  }
  return Math.max(...Array.from(map.values()))
}
