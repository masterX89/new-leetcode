function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function dfs(root, res) {
  if (!root) return
  res.push(root.val)
  dfs(root.left, res)
  dfs(root.right, res)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = []
  dfs(root, res)
  return res
}
