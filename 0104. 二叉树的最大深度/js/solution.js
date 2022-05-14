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
 * @return {number}
 */
var maxDepth = function (root) {
  let res = 0
  if (!root) return res
  const dfs = (node, depth) => {
    if (!node) return
    if (depth > res) res = depth
    node.left && dfs(node.left, depth + 1)
    node.right && dfs(node.right, depth + 1)
  }
  dfs(root, 1)
  return res
}
