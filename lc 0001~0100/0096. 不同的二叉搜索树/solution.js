/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let memo = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))
  const count = (lo, hi) => {
    if (lo > hi) return 1
    if (memo[lo][hi] !== 0) return memo[lo][hi]
    let res = 0
    for (let i = lo; i <= hi; i++) {
      const left = count(lo, i - 1)
      const right = count(i + 1, hi)
      res += left * right
    }
    memo[lo][hi] = res
    return res
  }
  return count(1, n)
}

// 数学
var numTrees = function (n) {
  if (n === 1) return 1
  return (2 * (2 * n - 1) * numTrees(n - 1)) / (n + 1)
}
