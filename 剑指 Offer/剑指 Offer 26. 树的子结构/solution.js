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
const recur = (A, B) => {
  if (B === null) return true
  if (A === null || A.val !== B.val) return false
  const leftRes = recur(A.left, B.left)
  const rightRes = recur(A.right, B.right)
  return leftRes && rightRes
}
var isSubStructure = function (A, B) {
  if (A === null || B === null) return false
  const curRes = recur(A, B)
  const leftRes = isSubStructure(A.left, B)
  const rightRes = isSubStructure(A.right, B)
  return curRes || leftRes || rightRes
}
