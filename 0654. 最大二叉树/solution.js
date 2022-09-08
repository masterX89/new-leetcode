/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 分解问题
var constructMaximumBinaryTree = function (nums) {
  // [left,right)
  const create = (nums, left, right) => {
    if (left === right) return null
    let max = -Infinity
    let index = left
    for (let i = left; i < right; i++) {
      if (nums[i] > max) {
        max = nums[i]
        index = i
      }
    }
    const root = new TreeNode(max)
    root.left = create(nums, left, index)
    root.right = create(nums, index + 1, right)
    return root
  }
  const root = create(nums, 0, nums.length)
  return root
}
