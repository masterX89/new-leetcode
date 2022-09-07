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
var longestUnivaluePath = function (root) {
  if (root === null) return 0
  let res = 0
  const maxPath = (node, parentVal) => {
    if (node === null) return 0
    const leftPath = maxPath(node.left, node.val)
    const rightPath = maxPath(node.right, node.val)
    res = Math.max(res, leftPath + rightPath)
    if (node.val !== parentVal) return 0
    return Math.max(leftPath, rightPath) + 1
  }
  maxPath(root, root.val)
  return res
}
