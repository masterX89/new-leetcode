/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [1, 2, 2, 3, 1, 4, 2]
var findShortestSubArray = function (nums) {
  // num -> [count,firstIndex,lastIndex]
  let map = {}
  nums.forEach((num, i) => {
    if (!map[num]) {
      map[num] = [1, i, i]
    } else {
      map[num][0]++
      map[num][2] = i
    }
  })
  let res = Infinity
  let maxCount = -1
  for (const num in map) {
    const len = map[num][2] - map[num][1] + 1
    if (map[num][0] > maxCount) {
      res = len
      maxCount = map[num][0]
    } else if (map[num][0] === maxCount) {
      res = len < res ? len : res
    }
  }
  return res
}

findShortestSubArray(nums)
