function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

// 这种迭代写法更通用 可以引申至多叉树
var preorderTraversal = function (root) {
  let res = []
  if (!root) return res

  let node = root
  let st = [node]
  while (st.length) {
    node = st.pop()
    if (node) {
      res.push(node.val)
      // 后 pop 的应该先 push
      st.push(node.right)
      st.push(node.left)
    }
  }
  return res
}

// var preorderTraversal = function (root) {
//   let res = []
//   if (!root) return res

//   let st = []
//   let node = root
//   while (node || st.length !== 0) {
//     while (node) {
//       res.push(node.val)
//       st.push(node)
//       node = node.left
//     }
//     node = st.pop()
//     node = node.right
//   }
//   return res
// }
