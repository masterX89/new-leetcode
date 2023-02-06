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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function (root, n, x) {
  let l = (r = 0)
  const dfs = (node) => {
    if (node === null) return 0
    let leftCnt = dfs(node.left)
    let rightCnt = dfs(node.right)
    if (node.val === x) {
      l = leftCnt
      r = rightCnt
    }
    return leftCnt + rightCnt + 1
  }
  dfs(root)
  return Math.max(l, r, n - l - r - 1) * 2 > n
}
