/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0
  if (x === 1) return 1
  let l = 1
  let r = Math.floor(x / 2)
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (mid * mid < x) {
      l = mid + 1
    } else if (mid * mid > x) {
      r = mid - 1
    } else {
      return mid
    }
  }
  return r
}

console.log(Math.pow(2, 31) - 1)
