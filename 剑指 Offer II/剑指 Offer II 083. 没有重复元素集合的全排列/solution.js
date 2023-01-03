/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = []
  let used = new Array(nums.length).fill(false)
  const backtrack = (track) => {
    if (track.length === nums.length) {
      res.push(track.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      track.push(nums[i])
      used[i] = true
      backtrack(track)
      track.pop()
      used[i] = false
    }
  }
  backtrack([])
  return res
}
