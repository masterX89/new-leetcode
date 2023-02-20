/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  const n = postorder.length
  const check = (start, end) => {
    if (start > end) return true
    const val = postorder[end]
    let i = start
    while (i <= end && postorder[i] < val) i++
    let j = i
    while (j <= end && postorder[j] > val) j++
    if (j !== end) return false
    return check(start, i - 1) && check(i, end - 1)
  }
  return check(0, n - 1)
}
