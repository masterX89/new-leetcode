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

// 遍历一遍树得到结果
var postorderTraversal = function (root) {
  let res = []
  const postOrder = (node) => {
    if (node === null) return
    postOrder(node.left)
    postOrder(node.right)
    res.push(node.val)
  }
  postOrder(root)
  return res
}

// 分解问题
var postorderTraversal = function (root) {
  if (root === null) return []
  const leftRes = postorderTraversal(root.left)
  const rightRes = postorderTraversal(root.right)
  return [...leftRes, ...rightRes, root.val]
}
