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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root && !subRoot) return true
  if (!root || !subRoot) return false
  return (
    isSameTree(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  )
  function isSameTree(A, B) {
    if (!A && !B) return true
    if (!A || !B) return false
    return (
      A.val === B.val &&
      isSameTree(A.left, B.left) &&
      isSameTree(A.right, B.right)
    )
  }
}
