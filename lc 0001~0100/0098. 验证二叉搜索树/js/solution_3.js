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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return false
  let st = [[root, -Infinity, Infinity]]
  while (st.length) {
    // [TreeNode,low,high]
    // [[TreeNode],low,high]
    const tuple = st.pop()
    const node = tuple[0]
    if (node instanceof TreeNode) {
      // r l root
      node.right && st.push([node.right, node.val, tuple[2]])
      node.left && st.push([node.left, tuple[1], node.val])
      st.push([[node], tuple[1], tuple[2]])
    } else {
      const val = node[0].val
      if (val <= tuple[1] || val >= tuple[2]) return false
    }
  }
  return true
}
