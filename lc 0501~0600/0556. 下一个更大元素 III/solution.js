/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  const MAX = 2 ** 31 - 1
  const nums = [...('' + n)].map((val) => val.charCodeAt() - '0'.charCodeAt())
  let i = nums.length - 2
  let j = (k = nums.length - 1)
  while (i >= 0 && nums[i] >= nums[j]) {
    i--
    j--
  }
  if (i < 0) return -1
  while (nums[i] >= nums[k]) k--
  ;[nums[i], nums[k]] = [nums[k], nums[i]]
  for (let k = nums.length - 1; j < k; j++, k--) {
    ;[nums[j], nums[k]] = [nums[k], nums[j]]
  }
  const res = parseInt(nums.join(''))
  return res <= MAX ? res : -1
}
