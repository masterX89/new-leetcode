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
  const find = (node) => {
    if (node === null) return null
    if (node.val === p.val || node.val === q.val) return node
    const left = find(node.left)
    const right = find(node.right)
    if (left !== null && right !== null) return node
    return left ? left : right
  }
  return find(root)
}
