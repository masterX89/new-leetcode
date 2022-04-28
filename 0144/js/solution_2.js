function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var preorderTraversal = function (root) {
  let res = []
  if (!root) return res

  let st = []
  let node = root
  while (node || st.length !== 0) {
    while (node) {
      res.push(node.val)
      st.push(node)
      node = node.left
    }
    node = st.pop()
    node = node.right
  }
  return res
}
