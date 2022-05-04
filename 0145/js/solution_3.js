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
var postorderTraversal = function (root) {
  let res = []
  if (!root) return res
  let st = [root]
  while (st.length) {
    const node = st.pop()
    if (node instanceof TreeNode) {
      st.push(node.val)
      node.right && st.push(node.right)
      node.left && st.push(node.left)
    } else {
      // node is number
      res.push(node)
    }
  }
  return res
}
