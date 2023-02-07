/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const recur = (left, right) => {
    if (left === null && right === null) return true
    if (left === null || right === null) return false
    const isEqual = left.val === right.val
    const leftRes = recur(left.left, right.right)
    const rightRes = recur(left.right, right.left)
    return isEqual && leftRes && rightRes
  }
  return recur(root, root)
}
