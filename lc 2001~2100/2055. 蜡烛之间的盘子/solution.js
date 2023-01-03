/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
// TLE
var platesBetweenCandles = function (s, queries) {
  let res = []
  for (const query of queries) {
    const [l, r] = query
    const subStr = s.slice(l, r + 1)
    const [firstIndex, lastIndex] = [
      subStr.indexOf('|'),
      subStr.lastIndexOf('|'),
    ]
    if (firstIndex !== -1 && lastIndex !== -1) {
      const content = subStr.slice(firstIndex + 1, lastIndex)
      const len = content.split('').filter((item) => item === '*').length
      res.push(len)
    } else {
      res.push(0)
    }
  }
  return res
}

// O(n + mlogn)
var platesBetweenCandles = function (s, queries) {
  let res = []
  let candles = []
  let sum = new Array(s.length + 1).fill(0)
  // 前缀和 + 二分预处理
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '|') candles.push(i)
    sum[i + 1] = sum[i] + (s[i] === '*' ? 1 : 0)
  }
  for (const query of queries) {
    const [a, b] = query
    let [firstIndex, lastIndex] = [-1, -1]
    // a 右侧 candle
    let [l, r] = [0, candles.length - 1]
    while (l <= r) {
      let mid = l + ((r - l) >> 1)
      if (candles[mid] < a) l = mid + 1
      else r = mid - 1
    }
    if (l === candles.length) {
      res.push(0)
      continue
    }
    firstIndex = candles[l]
    // b 左侧 candle
    ;[l, r] = [0, candles.length - 1]
    while (l <= r) {
      let mid = l + ((r - l) >> 1)
      if (candles[mid] <= b) l = mid + 1
      else r = mid - 1
    }
    if (r === -1) {
      res.push(0)
      continue
    }
    lastIndex = candles[r]
    if (firstIndex <= lastIndex) res.push(sum[lastIndex + 1] - sum[firstIndex])
    else res.push(0)
  }
  return res
}

// O(n + m)
var platesBetweenCandles = function (s, queries) {
  let res = []
  let candlesL = new Array(s.length).fill(-1)
  let candlesR = new Array(s.length).fill(-1)
  let sum = new Array(s.length + 1).fill(0)
  // 前缀和
  for (let i = 0, j = s.length - 1, p = -1, q = -1; i < s.length; i++, j--) {
    if (s[i] === '|') p = i
    if (s[j] === '|') q = j
    candlesL[i] = p
    candlesR[j] = q
    sum[i + 1] = sum[i] + (s[i] === '*' ? 1 : 0)
  }
  for (const query of queries) {
    const [a, b] = query
    let [firstIndex, lastIndex] = [candlesR[a], candlesL[b]]
    if (firstIndex !== -1 && lastIndex !== -1 && firstIndex <= lastIndex)
      res.push(sum[lastIndex + 1] - sum[firstIndex])
    else res.push(0)
  }
  return res
}
