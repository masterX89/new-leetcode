/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = []
  const track = []
  const backtrack = (start) => {
    // base case
    // if (start === nums.length) return
    res.push(track.slice())
    // edges
    for (let i = start; i < nums.length; i++) {
      track.push(nums[i])
      backtrack(i + 1)
      track.pop()
    }
  }
  backtrack(0)
  return res
}
