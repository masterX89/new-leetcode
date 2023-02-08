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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let x = null
  let y = null
  let prev = null
  const helper = (node) => {
    if (node === null) return
    helper(node.left)
    if (prev !== null && node.val < prev.val) {
      if (x === null) x = prev
      y = node
    }
    prev = node
    helper(node.right)
  }
  helper(root)
  ;[x.val, y.val] = [y.val, x.val]
}
