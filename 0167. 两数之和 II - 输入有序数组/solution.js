/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let res = []
  numbers.sort((a, b) => a - b)
  let lo = 0
  let hi = numbers.length - 1
  while (lo < hi) {
    const sum = numbers[lo] + numbers[hi]
    if (sum === target) {
      res.push([lo + 1, hi + 1])
      while (lo < hi && numbers[++lo] === numbers[lo - 1]) {}
      while (lo < hi && numbers[--hi] === numbers[hi + 1]) {}
    } else if (sum < target) {
      while (lo < hi && numbers[++lo] === numbers[lo - 1]) {}
    } else if (sum > target) {
      while (lo < hi && numbers[--hi] === numbers[hi + 1]) {}
    }
  }
  return res[0]
}
