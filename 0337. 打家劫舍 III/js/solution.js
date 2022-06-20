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

// 取该节点值 f(node) = node.val + g(node.left) + g(node.right)
// 不取该节点值 g(node) = max{f(node.left),g(node.left)} + max{f(node.right),g(node.right)}
var rob = function (root) {
  const f = new Map()
  const g = new Map()
  const dfs = (node) => {
    node.left && dfs(node.left)
    node.right && dfs(node.right)
    f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0))
    g.set(
      node,
      Math.max(f.get(node.left) || 0, g.get(node.left) || 0) +
        Math.max(f.get(node.right) || 0, g.get(node.right) || 0)
    )
  }
  dfs(root)
  return Math.max(f.get(root) || 0, g.get(root) || 0)
}
