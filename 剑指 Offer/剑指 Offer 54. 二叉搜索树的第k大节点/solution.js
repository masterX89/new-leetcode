/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let res = -1
  const inOrder = (node) => {
    if (node === null) return
    if (k < 0) return
    inOrder(node.right)
    k--
    if (k === 0) res = node.val
    inOrder(node.left)
  }
  inOrder(root)
  return res
}
