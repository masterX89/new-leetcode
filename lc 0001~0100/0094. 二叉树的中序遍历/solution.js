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
var inorderTraversal = function (root) {
  let res = []
  const recur = (node) => {
    if (node === null) return
    recur(node.left)
    res.push(node.val)
    recur(node.right)
  }
  recur(root)
  return res
}

// 染色迭代
var inorderTraversal = function (root) {
  let res = []
  let st = []
  if (root === null) return res
  st.push(root)
  while (st.length > 0) {
    const flag = st.pop()
    if (flag === null) {
      const node = st.pop()
      res.push(node.val)
    } else {
      const node = flag
      node.right && st.push(node.right)
      st.push(node)
      st.push(null)
      node.left && st.push(node.left)
    }
  }
  return res
}
