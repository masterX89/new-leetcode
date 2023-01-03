/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let set = new Set()
  let [l, r] = [0, 0]
  while (r < nums.length) {
    const c = nums[r]
    r++
    while (r - l > k + 1) {
      const d = nums[l]
      l++
      set.delete(d)
    }
    if (set.has(c)) return true
    set.add(c)
  }
  return false
}
