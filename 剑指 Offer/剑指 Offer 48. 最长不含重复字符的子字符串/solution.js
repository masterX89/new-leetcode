/**
 * @param {string} s
 * @return {number}
 */
// hash 存放最近的同一个字符的 index
var lengthOfLongestSubstring = function (s) {
  const n = s.length
  const lastIndex = new Map()
  let dp = new Array(n + 1).fill(1)
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    const ch = s[i - 1]
    const index = lastIndex.has(ch) ? lastIndex.get(ch) : -1
    lastIndex.set(ch, i - 1)
    let len = i - 1 - index
    if (len > dp[i - 1]) len = dp[i - 1] + 1
    dp[i] = Math.max(dp[i], len)
  }
  return Math.max(...dp)
}
