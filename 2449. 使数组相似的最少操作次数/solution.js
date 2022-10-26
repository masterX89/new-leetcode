/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var makeSimilar = function (nums, target) {
  const A = new Array(2).fill(0).map(() => [])
  const B = new Array(2).fill(0).map(() => [])
  for (let i = 0; i < nums.length; i++) {
    A[nums[i] % 2].push(nums[i])
    B[target[i] % 2].push(target[i])
  }
  for (let i = 0; i < 2; i++) {
    A[i].sort((a, b) => a - b)
    B[i].sort((a, b) => a - b)
  }
  let res = 0
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (A[i][j] > B[i][j]) res += parseInt((A[i][j] - B[i][j]) / 2)
    }
  }
  return res
}
