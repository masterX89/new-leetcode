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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  let res = []
  function recur(node, path, target) {
    if (!node) return
    path.push(node.val)
    if (node.left === null && node.right === null && node.val === target)
      res.push(path.slice())
    node.left && recur(node.left, path, target - node.val)
    node.right && recur(node.right, path, target - node.val)
    path.pop()
  }
  recur(root, [], target)
  return res
}
