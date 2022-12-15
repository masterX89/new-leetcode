/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1)
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] >= nums[i]) continue
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
  return Math.max(...dp)
}

// patience game - 贪心二分
var lengthOfLIS = function (nums) {
  const piles = []
  for (const target of nums) {
    let l = 0
    let r = piles.length - 1
    while (l <= r) {
      const c = l + ((r - l) >> 1)
      const num = piles[c][piles[c].length - 1]
      if (num >= target) r = c - 1
      else l = c + 1
    }
    if (l === piles.length) piles.push([target])
    else piles[l].push(target)
  }
  return piles.length
}
