/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const binarySearch = (nums, target) => {
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
  let sumL = [0]
  let sumR = [0]

  for (let i = 0; i < nums.length; i++) {
    sumL.push(sumL[i] + nums[i])
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    sumR.push(sumR[nums.length - 1 - i] + nums[i])
  }

  let res = Infinity
  for (let i = 0; i < sumL.length; i++) {
    let j = binarySearch(sumR, x - sumL[i])
    if (j === -1 || i + j > nums.length) continue
    res = Math.min(res, i + j)
  }
  return res !== Infinity ? res : -1
}
