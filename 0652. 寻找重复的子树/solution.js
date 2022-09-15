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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const map = new Map()
  let res = []
  const postTraversal = (root) => {
    if (root === null) return 'null'
    const leftSubTree = postTraversal(root.left)
    const rightSubTree = postTraversal(root.right)
    const subTree = `${leftSubTree},${rightSubTree},${root.val}}`
    // 使用 JSON.stringify API 时长会消耗到 900ms 左右
    // const subTree = JSON.stringify(root)
    const freq = map.get(subTree) || 0
    if (freq === 1) res.push(root)
    map.set(subTree, freq + 1)
    return subTree
  }
  postTraversal(root)
  return res
}
