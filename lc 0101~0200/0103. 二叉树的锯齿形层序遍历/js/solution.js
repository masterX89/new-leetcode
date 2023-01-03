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
  if (!root) return res
  let q = [root]
  let isOrderLeft = true /* left to right*/
  while (q.length) {
    const len = q.length
    res.push([])
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      if (isOrderLeft) res[res.length - 1].push(node.val)
      else res[res.length - 1].unshift(node.val)
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    isOrderLeft = !isOrderLeft
  }
  return res
}
