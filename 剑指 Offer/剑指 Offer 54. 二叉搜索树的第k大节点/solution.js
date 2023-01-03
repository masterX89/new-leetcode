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
// res 和 k 都是闭包的
var kthLargest = function (root, k) {
  let res
  function inOrderTraversal(node) {
    if (k === 0) return
    node.right && inOrderTraversal(node.right)
    if (--k === 0) res = node.val
    node.left && inOrderTraversal(node.left)
  }
  inOrderTraversal(root)
  return res
}
