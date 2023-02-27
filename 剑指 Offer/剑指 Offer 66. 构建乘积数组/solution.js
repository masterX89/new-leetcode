/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  let res = []
  const n = a.length
  let left = new Array(n).fill(1)
  let right = new Array(n).fill(1)
  for (let i = 1; i < n; i++) left[i] = left[i - 1] * a[i - 1]
  for (let i = n - 2; i >= 0; i--) right[i] = right[i + 1] * a[i + 1]
  for (let i = 0; i < n; i++) res.push(left[i] * right[i])
  return res
}
