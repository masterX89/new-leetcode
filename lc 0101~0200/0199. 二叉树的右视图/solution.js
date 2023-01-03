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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root === null) return []

  let res = []
  let q = [root]
  while (q.length > 0) {
    const len = q.length
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      if (i === 0) res.push(node.val)
      node.right && q.push(node.right)
      node.left && q.push(node.left)
    }
  }
  return res
}
