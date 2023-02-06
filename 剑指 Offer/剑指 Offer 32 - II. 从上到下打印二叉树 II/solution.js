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
  if (root === null) return res
  q.push(root)
  while (q.length > 0) {
    const len = q.length
    let level = []
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      level.push(node.val)
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    res.push(level)
  }
  return res
}
