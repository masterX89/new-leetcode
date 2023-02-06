/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = []
  let q = []
  let order = true // left to right order
  if (root === null) return res
  q.push(root)
  while (q.length > 0) {
    const len = q.length
    let level = []
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      if (order) {
        level.push(node.val)
      } else {
        level.unshift(node.val)
      }
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    order = !order
    res.push(level)
  }
  return res
}
