// 排序、原地删除、元素保留一个
/**
 * @param {number[]} nums
 * @return {number}
 */
// 快慢指针
var removeDuplicates = function (nums) {
  let slow = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) nums[++slow] = nums[fast]
  }
  return slow + 1
}

var removeDuplicates = function (nums) {
  function process(nums, k) {
    let slow = 0
    for (let fast = 0; fast < nums.length; fast++) {
      // 先给 nums[slow] 赋值然后再给 slow++，这样可以保证 nums[0..slow-1] 是不包含值为 val 的元素的，最后的结果数组长度就是 slow。
      // 左闭右开
      if (slow < k || nums[slow - k] !== nums[fast]) nums[slow++] = nums[fast]
    }
    return slow
  }
  return process(nums, 1)
}
