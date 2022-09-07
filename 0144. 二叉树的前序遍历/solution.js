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

// 递归 一次遍历
var preorderTraversal = function (root) {
  let res = []
  const traversal = (node) => {
    if (node === null) return
    res.push(node.val)
    traversal(node.left)
    traversal(node.right)
  }
  traversal(root)
  return res
}

// 递归 分解问题
var preorderTraversal = function (root) {
  if (root === null) return []
  const leftList = preorderTraversal(root.left)
  const rightList = preorderTraversal(root.right)
  const res = [root.val, ...leftList, ...rightList]
  return res
}

// TODO: 迭代 外部栈
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
