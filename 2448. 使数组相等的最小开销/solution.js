/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (nums, cost) {
  const n = nums.length
  const pairs = nums
    .map((val, ind) => [val, cost[ind]])
    .sort((a, b) => a[0] - b[0])
  let sumAB = new Array(n + 1).fill(0)
  let sumB = new Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    sumAB[i] = sumAB[i - 1] + pairs[i - 1][0] * pairs[i - 1][1]
    sumB[i] = sumB[i - 1] + pairs[i - 1][1]
  }
  let res = Infinity
  for (let i = 1; i <= n; i++) {
    res = Math.min(
      res,
      pairs[i - 1][0] * sumB[i] -
        sumAB[i] +
        sumAB[n] -
        sumAB[i] -
        pairs[i - 1][0] * (sumB[n] - sumB[i])
    )
  }
  return res
}
