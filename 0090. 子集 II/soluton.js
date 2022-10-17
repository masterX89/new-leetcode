/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = []
  nums.sort((a, b) => a - b)
  const backtrack = (track, start) => {
    // base case
    res.push(track.slice())
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue
      track.push(nums[i])
      // TODO: i + 1 vs. start + 1
      backtrack(track, i + 1)
      track.pop()
    }
  }
  backtrack([], 0)
  return res
}
