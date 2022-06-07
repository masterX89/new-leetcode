/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums
  this.sumsL = new Array(nums.length + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    this.sumsL[i + 1] = this.sumsL[i] + nums[i]
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.sumsL[right + 1] - this.sumsL[left]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
