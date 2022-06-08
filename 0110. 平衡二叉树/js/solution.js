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
 * @return {boolean}
 */

// O(n^2)
var isBalanced = function (root) {
  function getDepth(node) {
    if (!node) return 0
    return Math.max(getDepth(node.left), getDepth(node.right)) + 1
  }
  if (!root) return true
  return (
    Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}

// 自底向上 后序遍历
// 计算 Depth 时候就记录结果
// 颜色标记 深度 | -1 不平衡
// O(n)
var isBalanced = function (root) {
  function getDepth(node) {
    if (!node) return 0
    let depthL = getDepth(node.left)
    if (depthL === -1) return -1
    let depthR = getDepth(node.right)
    if (depthR === -1) return -1
    return Math.abs(depthL - depthR) <= 1 ? Math.max(depthL, depthR) + 1 : -1
  }
  return getDepth(root) !== -1
}
