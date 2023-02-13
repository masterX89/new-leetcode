/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const n = nums.length
  const search = (num, start) => {
    let l = start
    let r = n - 1
    while (l <= r) {
      let c = l + ((r - l) >> 1)
      if (nums[c] === num) return c
      else if (nums[c] < num) l = c + 1
      else r = c - 1
    }
    return -1
  }
  for (let i = 0; i < n; i++) {
    const index = search(target - nums[i], i + 1)
    if (index !== -1) return [nums[i], nums[index]]
  }
  return [-1, -1]
}
