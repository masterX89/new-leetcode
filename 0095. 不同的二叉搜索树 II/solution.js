/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  const build = (lo, hi) => {
    if (lo > hi) return [null]
    const res = []
    for (let i = lo; i <= hi; i++) {
      const leftSubTree = build(lo, i - 1)
      const rightSubTree = build(i + 1, hi)
      for (let left of leftSubTree) {
        for (let right of rightSubTree) {
          const root = new TreeNode(i)
          root.left = left
          root.right = right
          res.push(root)
        }
      }
    }
    return res
  }
  return build(1, n)
}
