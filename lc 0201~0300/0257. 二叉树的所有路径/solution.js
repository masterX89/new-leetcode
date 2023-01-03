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
  const backtrack = (node, path) => {
    // 注意 return 的条件和 res 添加的条件是不一样的
    if (node === null) return
    path.push(node.val)
    if (node.left === null && node.right === null) {
      res.push(path.join('->'))
    }
    backtrack(node.left, path)
    backtrack(node.right, path)
    path.pop()
  }
  backtrack(root, [])
  return res
}
