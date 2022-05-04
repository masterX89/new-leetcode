/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 颜色标记法迭代
// 利用 TreeNode 和 val 的类型不同
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let res = []
  if (!root) return res
  let st = [root]
  while (st.length) {
    let node = st.pop()
    if (node instanceof TreeNode) {
      node.right && st.push(node.right)
      st.push(node.val)
      node.left && st.push(node.left)
    } else {
      res.push(node)
    }
  }
  return res
}
