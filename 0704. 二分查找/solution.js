/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 错位 相等return
var search = function (nums, target) {
  const n = nums.length
  let l = 0
  let r = n - 1
  while (l <= r) {
    let c = l + ((r - l) >> 1)
    if (nums[c] === target) return c
    else if (nums[c] < target) l = c + 1
    else r = c - 1
  }
  return -1
}

// 错位 大于等于
var search = function (nums, target) {
  const n = nums.length
  let l = 0
  let r = n - 1
  while (l <= r) {
    let c = l + ((r - l) >> 1)
    if (nums[c] >= target) r = c - 1
    else l = c + 1
  }
  return l !== n && nums[l] === target ? l : -1
}

// 错位 小于等于
var search = function (nums, target) {
  const n = nums.length
  let l = 0
  let r = n - 1
  while (l <= r) {
    let c = l + ((r - l) >> 1)
    if (nums[c] <= target) l = c + 1
    else r = c - 1
  }
  return r !== -1 && nums[r] === target ? r : -1
}

// 相等退出 相等return
var search = function (nums, target) {
  const n = nums.length
  let l = 0
  let r = n
  while (l < r) {
    let c = l + ((r - l) >> 1)
    if (nums[c] === target) return c
    else if (nums[c] < target) l = c + 1
    else r = c
  }
  return -1
}

// 相等退出 大于等于
var search = function (nums, target) {
  const n = nums.length
  let l = 0
  let r = n
  while (l < r) {
    let c = l + ((r - l) >> 1)
    if (nums[c] >= target) r = c
    else l = c + 1
  }
  return r !== n && nums[r] === target ? r : -1
}

// 相等退出 小于等于
var search = function (nums, target) {
  const n = nums.length
  let l = 0
  let r = n
  while (l < r) {
    let c = l + ((r - l) >> 1)
    if (nums[c] <= target) l = c + 1
    else r = c
  }
  // l 左侧 小于等于 target
  return l > 0 && nums[l - 1] === target ? l - 1 : -1
}
