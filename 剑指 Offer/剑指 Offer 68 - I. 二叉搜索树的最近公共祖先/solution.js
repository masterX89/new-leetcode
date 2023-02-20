/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const min = Math.min(p.val, q.val)
  const max = Math.max(p.val, q.val)
  const find = (node) => {
    if (node === null) return null
    if (node.val < min) return find(node.right)
    else if (node.val > max) return find(node.left)
    else return node
  }
  return find(root)
}
