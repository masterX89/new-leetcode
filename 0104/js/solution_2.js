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
var maxDepth = function (root) {
  let res = 0
  if (!root) return res
  let st = [[root, 1]]
  while (st.length) {
    // [TreeNode,depth]
    const tuple = st.pop()
    const node = tuple[0]
    if (node instanceof TreeNode) {
      node.right && st.push([node.right, tuple[1] + 1])
      node.left && st.push([node.left, tuple[1] + 1])
      st.push([[node], tuple[1]])
    } else if (tuple[1] > res) {
      res = tuple[1]
    }
  }
  return res
}
