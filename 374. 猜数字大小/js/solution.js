/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
// 错位停止 相等 return
var guessNumber = function (n) {
  let l = 1
  let r = n
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (guess(mid) === 0) return mid
    if (guess(mid) === 1) {
      // mid < pick
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
}

// 错位停止 大于等于
var guessNumber = function (n) {
  let l = 1
  let r = n
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (guess(mid) === 1) {
      // mid < pick
      l = mid + 1
    } else {
      // mid >= pick
      r = mid - 1
    }
  }
  // l n+1
  // guess(l) === 0
  return l
}

// 错位停止 小于等于
var guessNumber = function (n) {
  let l = 1
  let r = n
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (guess(mid) === 1 || guess(mid) === 0) {
      // mid <= pick
      l = mid + 1
    } else {
      // mid > pick
      r = mid - 1
    }
  }
  // r ? -1
  // guess(r) === 0
  return r
}

// 相等停止 相等 return
var guessNumber = function (n) {
  let l = 1
  let r = n + 1
  while (l < r) {
    let mid = l + ((r - l) >> 1)
    if (guess(mid) === 0) return mid
    if (guess(mid) === 1) {
      // mid < pick
      l = mid + 1
    } else {
      // mid > pick
      r = mid
    }
  }
}

// 相等停止 大于等于
var guessNumber = function (n) {
  let l = 1
  let r = n + 1
  while (l < r) {
    let mid = l + ((r - l) >> 1)
    if (guess(mid) === 1) {
      // mid < pick
      // l 的左侧必定小于 pick
      l = mid + 1
    } else {
      // mid >= pick
      // r 及其 右侧 必定 大于等于 pick
      r = mid
    }
  }
  // r ? n+1
  return r
}

// 相等停止 小于等于 模板1
var guessNumber = function (n) {
  let l = 1
  let r = n + 1
  while (l < r) {
    let mid = l + ((r - l) >> 1)
    if (guess(mid) === 1) {
      // mid < pick
      // l 的左侧必定小于 pick
      l = mid + 1
    } else {
      // mid >= pick
      // r 及其 右侧 必定 大于等于 pick
      r = mid
    }
  }
  // ? r - 1 : r
  return r
}

// 相等停止 小于等于 模板2
var guessNumber = function (n) {
  let l = 1
  let r = n + 1
  while (l < r) {
    let mid = l + ((r - l) >> 1)
    if (guess(mid) === 1 || guess(mid) === 0) {
      // mid <= pick
      // l 的左侧必定小于等于 pick
      l = mid + 1
    } else {
      // mid > pick
      // r 及其右侧必定大于 pick
      r = mid
    }
  }
  return r - 1
}
