/**
 * @param {string[]} strs
 * @return {string}
 */
// 暴力
var longestCommonPrefix = function (strs) {
  let res = ''
  let minLen = Infinity
  let minStr = ''
  for (const str of strs) {
    if (str.length < minLen) {
      minStr = str
      minLen = str.length
    }
  }
  while (res.length <= minLen) {
    for (const str of strs) {
      if (!str.startsWith(res)) return res.slice(0, res.length - 1)
    }
    if (res.length === minLen) return res
    res += minStr[res.length]
  }
  return res
}
// TODO: 更新优雅解法
