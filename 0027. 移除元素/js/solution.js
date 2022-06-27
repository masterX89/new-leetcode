// 未排序、原地移除、保留一个
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 暴力
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      for (let j = i; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1]
      }
      // 关键点
      nums.length--
    }
  }
  return nums.length
}

// 快慢指针
var removeElement = function (nums, val) {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) nums[slow++] = nums[fast]
  }
  return slow
}

// 快慢指针 省略 fast 的写法
var removeElement = function (nums, val) {
  let slow = 0
  for (const num of nums) {
    if (num !== val) nums[slow++] = num
  }
  return slow
}

// 相向指针
var removeElement = function (nums, val) {
  let [l, r] = [0, nums.length - 1]
  while (l <= r) {
    while (l <= r && nums[l] !== val) l++
    while (l <= r && nums[r] === val) r--
    // 可能会 r l
    if (l < r) nums[l++] = nums[r--]
  }
  // r l l 左侧均为 !== val
  // 因此 l 为 length
  return l
}
