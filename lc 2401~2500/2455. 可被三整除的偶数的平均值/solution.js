/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let cnt = 0
  let sum = 0
  for (const num of nums) {
    if (num % 6 === 0) {
      cnt++
      sum += num
    }
  }
  return cnt === 0 ? 0 : parseInt(sum / cnt)
}
