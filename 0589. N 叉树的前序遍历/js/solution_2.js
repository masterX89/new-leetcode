/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let res = []
  if (!root) return res
  let st = [root]
  while (st.length) {
    const node = st.pop()
    if (node instanceof Node) {
      const children = node.children
      for (let i = children.length - 1; i >= 0; i--) {
        st.push(children[i])
      }
      st.push(node.val)
    } else {
      // node is number
      res.push(node)
    }
  }
  return res
}
