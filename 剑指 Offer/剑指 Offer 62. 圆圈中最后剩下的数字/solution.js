/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  const helper = (n, m) => {
    if (n === 1) return 0
    const x = helper(n - 1, m)
    return (((m - 1) % n) + x + 1) % n
  }
  return helper(n, m)
}
