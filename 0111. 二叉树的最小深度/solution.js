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
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0
  let q = [root]
  let depth = 1
  while (q.length !== 0) {
    const len = q.length
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      if (node.left === null && node.right === null) return depth
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    depth++
  }
  return depth
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0
  if (!root.left) return minDepth(root.right) + 1
  if (!root.right) return minDepth(root.left) + 1
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}
