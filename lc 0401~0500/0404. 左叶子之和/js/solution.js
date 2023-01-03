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
var sumOfLeftLeaves = function (root) {
  let res = 0
  const recur = (node, flag) => {
    if (!node.left && !node.right && flag === 'left') {
      res += node.val
    }
    node.left && recur(node.left, 'left')
    node.right && recur(node.right, 'right')
  }
  recur(root, '')
  return res
}
