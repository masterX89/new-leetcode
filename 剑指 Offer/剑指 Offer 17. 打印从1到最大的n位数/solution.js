/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let res = []
  for (let i = 1; i < Math.pow(10, n); i++) res.push(i)
  return res
}
