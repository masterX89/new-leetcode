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
var maxPathSum = function (root) {
  let res = -Infinity
  const maxPath = (node) => {
    if (node === null) return 0
    const leftSum = Math.max(0, maxPath(node.left))
    const rightSum = Math.max(0, maxPath(node.right))
    const sum = Math.max(leftSum, rightSum) + node.val
    const rootSum = node.val + leftSum + rightSum
    res = Math.max(res, rootSum)
    return sum
  }
  maxPath(root)
  return res
}
