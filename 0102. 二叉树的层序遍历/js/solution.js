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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = []
  if (!root) return res
  let q = [root]
  while (q.length) {
    const len = q.length
    res.push([])
    for (i = 0; i < len; i++) {
      const node = q.shift()
      res[res.length - 1].push(node.val)
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
  }
  return res
}
