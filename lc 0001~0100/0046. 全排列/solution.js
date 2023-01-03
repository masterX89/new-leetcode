/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const used = new Array(nums.length).fill(false)
  const res = []
  const backtrack = (track, used) => {
    if (track.length === nums.length) {
      res.push(track.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      track.push(nums[i])
      used[i] = true
      backtrack(track, used)
      track.pop()
      used[i] = false
    }
  }
  backtrack([], used)
  return res
}
