/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!A && !B) return true
  if (!A || !B) return false
  return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  function recur(A, B) {
    if (!B) return true
    if (!A) return false
    return A.val === B.val && recur(A.left, B.left) && recur(A.right, B.right)
  }
}
