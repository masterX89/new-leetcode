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
 * @return {number}
 */
var rob = function (root) {
  const memo = new Map()
  const helper = (root) => {
    if (root === null) return 0
    if (memo.has(root)) return memo.get(root)
    const robIt =
      root.val +
      (root.left ? helper(root.left.left) + helper(root.left.right) : 0) +
      (root.right ? helper(root.right.left) + helper(root.right.right) : 0)
    const notRobIt = helper(root.left) + helper(root.right)
    const res = Math.max(robIt, notRobIt)
    memo.set(root, res)
    return res
  }
  return helper(root)
}
