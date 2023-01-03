/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function getMinNode(node) {
  while (node.left) node = node.left
  return node
}
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) return null
  if (root.val === key) {
    // del
    // 1 && 2
    if (root.left === null) return root.right
    if (root.right === null) return root.left
    // 3
    const minNode = getMinNode(root.right)
    root.right = deleteNode(root.right, minNode.val)
    minNode.left = root.left
    minNode.right = root.right
    root = minNode
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key)
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key)
  }
  return root
}
