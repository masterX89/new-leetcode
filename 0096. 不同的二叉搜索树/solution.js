/**
 * @param {number} n
 * @return {number}
 */

// 数学
var numTrees = function (n) {
  if (n === 1) return 1
  return (2 * (2 * n - 1) * numTrees(n - 1)) / (n + 1)
}
