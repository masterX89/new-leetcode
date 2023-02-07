/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (root === null) return null
  const left = mirrorTree(root.left)
  const right = mirrorTree(root.right)
  root.left = right
  root.right = left
  return root
}
