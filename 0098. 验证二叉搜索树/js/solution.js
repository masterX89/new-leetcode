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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return false
  let res = true
  const dfs = (node, low, high) => {
    if (!node || !res) return
    if (node.val <= low || node.val >= high) {
      res = false
    }
    node.left && dfs(node.left, low, node.val)
    node.right && dfs(node.right, node.val, high)
  }
  dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
  return res
}
