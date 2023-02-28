/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let [x, y] = [0, 0]
  let [n, m] = [0, 1]
  for (const num of nums) n ^= num
  while ((n & m) === 0) m <<= 1
  for (const num of nums) {
    if (num & m) x ^= num
    else y ^= num
  }
  return [x, y]
}
