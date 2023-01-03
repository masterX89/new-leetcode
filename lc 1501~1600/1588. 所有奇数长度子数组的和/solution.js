/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let res = 0
  const sumsL = new Array(arr.length + 1).fill(0)
  for (let i = 0; i < arr.length; i++) {
    sumsL[i + 1] = sumsL[i] + arr[i]
  }
  for (let start = 0; start < arr.length; start++) {
    for (end = start; end < arr.length; end += 2) {
      res += sumsL[end + 1] - sumsL[start]
    }
  }
  return res
}
