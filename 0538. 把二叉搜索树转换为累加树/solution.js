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
var convertBST = function (root) {
  let sum = 0
  const traversal = (node) => {
    if (node === null) return
    traversal(node.right)
    sum += node.val
    node.val = sum
    traversal(node.left)
  }
  traversal(root)
  return root
}
