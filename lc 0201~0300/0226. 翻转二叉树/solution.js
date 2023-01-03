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
 * @return {TreeNode}
 */
// 递归 一次遍历 前序
var invertTree = function (root) {
  if (root === null) return null
  let temp = root.left
  root.left = root.right
  root.right = temp
  invertTree(root.left)
  invertTree(root.right)
  return root
}

// 递归 一次遍历 后序
var invertTree = function (root) {
  if (root === null) return null
  invertTree(root.left)
  invertTree(root.right)
  let temp = root.left
  root.left = root.right
  root.right = temp
  return root
}

// 递归 分解问题
var invertTree = function (root) {
  if (root === null) return null
  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.left = right
  root.right = left
  return root
}
