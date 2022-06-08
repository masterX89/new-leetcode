/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  // 由于存在 0 下面三行可以三合一
  // minDepth(root.left) + minDepth(root.right) + 1
  if (!root.left && !root.right) return 1
  if (!root.left) return minDepth(root.right) + 1
  if (!root.right) return minDepth(root.left) + 1
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}

var minDepth = function (root) {
  if (!root) return 0
  return !root.left || !root.right
    ? minDepth(root.left) + minDepth(root.right) + 1
    : Math.min(minDepth(root.left), minDepth(root.right)) + 1
}
