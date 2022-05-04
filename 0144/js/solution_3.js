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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return []
  let res = []
  let st = [root]
  while (st.length) {
    const node = st.pop()
    if (node instanceof TreeNode) {
      node.right && st.push(node.right)
      node.left && st.push(node.left)
      st.push(node.val)
    } else {
      res.push(node)
    }
  }
  return res
}
