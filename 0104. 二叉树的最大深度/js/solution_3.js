/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 层次遍历
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let res = 0
  if (!root) return res
  let q = [root]
  while (q.length) {
    const len = q.length
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    res++
  }
  return res
}
