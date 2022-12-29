/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let res = 0
  const backtrack = (i, sum) => {
    if (i === nums.length) {
      if (sum === target) res++
      return
    }
    backtrack(i + 1, sum + nums[i])
    backtrack(i + 1, sum - nums[i])
  }
  backtrack(0, 0)
  return res
}
// sum(A) - sum(B) = target
// sum(A) = [target + sum(nums)] / 2
// dp[i][j] [0, i - 1] 装满 j 的方法总数
var findTargetSumWays = function (nums, target) {
  const n = nums.length
  const sum = nums.reduce((prev, curr) => prev + curr, 0)
  if (sum < Math.abs(target) || (sum + target) % 2 !== 0) return 0
  const m = parseInt((target + sum) / 2)
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
  dp[0][0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (nums[i - 1] > j) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]]
      }
    }
  }
  return dp[n][m]
}
