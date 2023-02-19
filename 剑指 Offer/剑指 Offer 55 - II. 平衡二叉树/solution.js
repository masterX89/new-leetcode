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
var isBalanced = function (root) {
  let res = true
  const recur = (node) => {
    if (node === null) return 0
    const left = recur(node.left)
    const right = recur(node.right)
    if (Math.abs(left - right) > 1) res = false
    return Math.max(left, right) + 1
  }
  recur(root)
  return res
}
