/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
  const chs = str.trim().split('')
  let res = 0
  const BOUND = Math.floor((Math.pow(2, 31) - 1) / 10)
  let sign = 1
  let i = 1
  if (chs[0] === '-') sign = -1
  else if (chs[0] !== '+') i = 0
  for (; i < chs.length; i++) {
    if (chs[i] < '0' || chs[i] > '9') break
    if (res > BOUND || (res === BOUND && chs[i] > '7'))
      return sign === 1 ? Math.pow(2, 31) - 1 : -Math.pow(2, 31)
    res = res * 10 + (chs[i] - '0')
  }
  return sign * res
}
