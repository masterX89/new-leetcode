// TLE
const mergeSort = (preSum, lo, hi, lower, upper) => {
  if (lo === hi) return 0
  const mid = lo + ((hi - lo) >> 1)
  let n1 = mergeSort(preSum, lo, mid, lower, upper)
  let n2 = mergeSort(preSum, mid + 1, hi, lower, upper)
  let res = n1 + n2
  for (let i = lo; i <= mid; i++) {
    let [start, end] = [mid + 1, mid + 1]
    while (start <= hi && preSum[start] - preSum[i] < lower) start++
    while (end <= hi && preSum[end] - preSum[i] <= upper) end++
    res += end - start
  }
  const sorted = new Array(hi - lo + 1)
  for (let i = lo, j = mid + 1, k = 0; k < sorted.length; k++) {
    if (i === mid + 1) sorted[k] = preSum[j++]
    else if (j === hi + 1) sorted[k] = preSum[i++]
    else if (preSum[i] > preSum[j]) sorted[k] = preSum[j++]
    else sorted[k] = preSum[i++]
  }
  for (let i = 0; i < sorted.length; i++) {
    preSum[lo + i] = sorted[i]
  }
  return res
}
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  let s = 0
  const preSum = [0]
  for (const num of nums) {
    s += num
    preSum.push(s)
  }
  return mergeSort(preSum, 0, preSum.length - 1, lower, upper)
}
