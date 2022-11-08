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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let res = []
  const preOrder = (node, path) => {
    if (node === null) return
    path.push(node.val)
    if (node.left === null && node.right === null) {
      res.push(path.join('->'))
    }
    preOrder(node.left, path)
    preOrder(node.right, path)
    path.pop()
  }
  preOrder(root, [])
  return res
}
