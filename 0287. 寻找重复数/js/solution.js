/**
 * @param {number[]} nums
 * @return {number}
 */
// num 的范围 [1,n], n = nums.length
// 只有一个重复的数字
// 但是可能重复多次
// set O(n) O(n)
var findDuplicate = function (nums) {
  let set = new Set()
  for (const num of nums) {
    if (set.has(num)) return num
    set.add(num)
  }
}

// 二分
var findDuplicate = function (nums) {
  const n = nums.length
  let l = 1,
    r = n - 1
  while (l <= r) {
    let mid = (l + r) >> 1
    let cnt = nums.filter((num) => num <= mid).length
    if (cnt <= mid) {
      // 最后 l 是第一个不符合的
      // 即 l 是第一个满足 > cnt 的数字
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return l
}

// 快慢指针
var findDuplicate = function (nums) {
  let slow = nums[0]
  let fast = nums[nums[0]]
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[nums[fast]]
  }
  slow = 0
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }
  return slow
}
