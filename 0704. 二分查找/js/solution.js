/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 错位 相等return
var search = function (nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] === target) return mid
    else if (nums[mid] < target) l = mid + 1
    else r = mid - 1
  }
  return -1
}

// 错位 大于等于
var search = function (nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] < target) l = mid + 1
    else r = mid - 1
  }
  // l 3种情况

  // || common
  // return l === nums.length ? -1 : l
  // || common 基础上的短路写法
  // return l === nums.length || nums[l] !== target ? -1 : l

  // && 短路写法
  // return l !== nums.length ? l : -1
  return l !== nums.length && nums[l] === target ? l : -1
}

// 错位 小于等于
var search = function (nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] <= target) l = mid + 1
    else r = mid - 1
  }
  // r 3种情况
  // || common
  // return r
  // 实际上为
  // return r === -1 ? -1 : r
  // || common 基础上的短路写法
  // return r === -1 || nums[r] !== target ? -1 : r

  // && 短路写法
  // return r
  // 实际为
  // return r !== -1 ? r : -1
  return r !== -1 && nums[r] === target ? r : -1
}

// 相等退出 相等return
var search = function (nums, target) {
  let l = 0
  let r = nums.length
  while (l < r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] === target) return mid
    else if (nums[mid] < target) l = mid + 1
    else r = mid
  }
  return -1
}

// 相等退出 大于等于
var search = function (nums, target) {
  let l = 0
  let r = nums.length
  while (l < r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] < target) l = mid + 1
    else r = mid
  }
  // r 及其 右侧 大于等于 target
  return r !== nums.length && nums[r] === target ? r : -1
}

// 相等退出 小于等于 模板1
var search = function (nums, target) {
  let l = 0
  let r = nums.length
  while (l < r) {
    let mid = l + ((r - l) >> 1)
    // 很别扭的思考
    if (nums[mid] < target) l = mid + 1 // l 左侧必 小于 target
    else r = mid // r 及其右侧 必 大于等于 target
  }
  // r : r - 1
  // common
  // return r !== nums.length && nums[r] === target ? r : r - 1

  return r !== nums.length && nums[r] === target
    ? r
    : r > 0 && nums[r - 1] === target
    ? r - 1
    : -1
}

// 相等退出 小于等于 模板2
// 建议使用该模板
var search = function (nums, target) {
  let l = 0
  let r = nums.length
  while (l < r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] <= target) l = mid + 1 // l 左侧必 小于等于 target
    else r = mid // r 及其右侧 必 大于 target
  }
  // r - 1
  // common
  // return r - 1
  // 实际为 r > 0 ? r - 1 : -1

  return r > 0 && nums[r - 1] === target ? r - 1 : -1
}
