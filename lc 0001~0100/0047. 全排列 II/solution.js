/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = []
  const used = new Array(nums.length).fill(false)
  const backtrack = (track) => {
    if (track.length === nums.length) {
      res.push(track.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
      track.push(nums[i])
      used[i] = true
      backtrack(track)
      track.pop()
      used[i] = false
    }
  }
  nums.sort((a, b) => a - b)
  backtrack([])
  return res
}
