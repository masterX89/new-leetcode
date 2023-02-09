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
var zigzagLevelOrder = function (root) {
  let res = []
  let q = []
  // left to right order
  let order = true
  if (root === null) return res
  q.push(root)
  while (q.length > 0) {
    const len = q.length
    let list = []
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      if (order) list.push(node.val)
      else list.unshift(node.val)
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    res.push(list)
    order = !order
  }
  return res
}
