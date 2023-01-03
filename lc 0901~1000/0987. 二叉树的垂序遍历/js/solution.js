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
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  // TreeNode -> tuple: [row,col]
  let arr = []
  const dfs = (node, row, col) => {
    if (!node) return
    arr.push([node, row, col])
    node.left && dfs(node.left, row + 1, col - 1)
    node.right && dfs(node.right, row + 1, col + 1)
  }
  dfs(root, 0, 0)
  arr.sort((a, b) => {
    if (a[2] !== b[2]) {
      // col
      return a[2] - b[2]
    } else if (a[1] !== b[1]) {
      // row
      return a[1] - b[1]
    } else {
      return a[0].val - b[0].val
    }
  })
  let col = -Infinity
  const res = []
  arr.forEach((tuple) => {
    if (tuple[2] > col) {
      res.push([])
      col = tuple[2]
    }
    res[res.length - 1].push(tuple[0].val)
  })
  return res
}

verticalTraversal(root)
