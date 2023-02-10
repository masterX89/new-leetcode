/**
 * @param {number} num
 * @return {number}
 */
// 题意：注意 102 只有 bac 和 kc 两种，不能翻译成 1 | 02 带有前置 0 的方式
var translateNum = function (num) {
  const s = num.toString()
  const n = s.length
  let dp = new Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1]
    if (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] <= '5'))
      dp[i] += dp[i - 2]
  }
  return dp[n]
}
