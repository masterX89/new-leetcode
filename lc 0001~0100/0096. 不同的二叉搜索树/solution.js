/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let memo = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))
  const helper = (start, end) => {
    if (start > end) return 1
    if (memo[start][end] !== 0) return memo[start][end]
    let count = 0
    for (let i = start; i <= end; i++) {
      const left = helper(start, i - 1)
      const right = helper(i + 1, end)
      count += left * right
    }
    memo[start][end] = count
    return count
  }
  return helper(1, n)
}

// 数学
var numTrees = function (n) {
  if (n === 1) return 1
  return (2 * (2 * n - 1) * numTrees(n - 1)) / (n + 1)
}
