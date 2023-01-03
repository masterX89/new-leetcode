/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// [3,1,4,null,null,2]
// let root = new TreeNode(
//   3,
//   new TreeNode(1, null, null),
//   new TreeNode(3, new TreeNode(2, null, null), null)
// )

// 不要去看 https://leetcode-cn.com/problems/recover-binary-search-tree/solution/san-chong-jie-fa-xiang-xi-tu-jie-99-hui-fu-er-cha-/
// 这个精选题解的 if-else 设计的很糟糕
// 极其容易遗漏 prev 的更新
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let x = null
  let y = null
  let prev = null

  const findXY = (node) => {
    if (!node) return
    findXY(node.left)
    if (prev && node.val < prev.val) {
      if (!x) {
        x = prev
      }
      y = node
    }
    prev = node
    findXY(node.right)
  }
  findXY(root)
  ;[x.val, y.val] = [y.val, x.val]
}
