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
  let q = [root]
  let res = []
  while (q.length) {
    const len = q.length
    let flag = true
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      if (flag) {
        res.push(node.val)
        flag = false
      }
      node.right && q.push(node.right)
      node.left && q.push(node.left)
    }
  }
  return res
}
