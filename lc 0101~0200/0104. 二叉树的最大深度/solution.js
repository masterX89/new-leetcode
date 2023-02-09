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
var maxDepth = function (root) {
  const helper = (node) => {
    if (node === null) return 0
    const left = helper(node.left)
    const right = helper(node.right)
    return Math.max(left, right) + 1
  }
  return helper(root)
}
