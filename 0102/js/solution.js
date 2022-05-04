/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(
  3,
  new TreeNode(9, null, null),
  new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))
)
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
    const lastIndex = res.length - 1
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      if (node) {
        res[lastIndex].push(node.val)
        node.left && q.push(node.left)
        node.right && q.push(node.right)
      }
    }
  }
  return res
}

const res = levelOrder(root)
console.log(res)
