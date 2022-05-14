/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(
  2,
  new TreeNode(1, null, null),
  new TreeNode(3, null, null)
)

/**
 * @param {TreeNode} root
 * @return {number}
 */
 var findBottomLeftValue = function (root) {
  let res = root.val
  let maxDepth = 0
  let level = 0

  const dfs = (node, level) => {
    if (!node) return
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
    if (level > maxDepth) {
      maxDepth = level
      res = node.val
    }
  }

  dfs(root, level)
  return res
}

const res = findBottomLeftValue(root)
console.log(res)
