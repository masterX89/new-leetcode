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
// 递归 分解问题
var diameterOfBinaryTree = function (root) {
  let res = 0
  const maxDepth = (node) => {
    if (node === null) return 0
    const leftDepth = maxDepth(node.left)
    const rightDepth = maxDepth(node.right)
    const depth = Math.max(leftDepth, rightDepth) + 1
    const diameter = leftDepth + rightDepth
    res = Math.max(res, diameter)
    return depth
  }
  maxDepth(root)
  return res
}

// 递归 一次遍历 O(n^2)
// 由于一次遍历只能拿到当前节点信息 子树问题更适合分解思路
var diameterOfBinaryTree = function (root) {
  let res = 0
  const maxDepth = (node) => {
    if (node === null) return 0
    const leftDepth = maxDepth(node.left)
    const rightDepth = maxDepth(node.right)
    const depth = Math.max(leftDepth, rightDepth) + 1
    return depth
  }
  const traversal = (node) => {
    if (node === null) return
    const diameter = maxDepth(node.left) + maxDepth(node.right)
    res = Math.max(res, diameter)
    traversal(node.left)
    traversal(node.right)
  }
  traversal(root)
  return res
}
