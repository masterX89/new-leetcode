/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let [l, r] = [0, num]
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (mid * mid === num) return true
    else if (mid * mid < num) l = mid + 1
    else r = mid - 1
  }
  return false
}
