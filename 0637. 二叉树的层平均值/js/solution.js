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
var averageOfLevels = function (root) {
  let res = []
  if (!root) return res
  let q = [root]
  while (q.length) {
    const len = q.length
    let [sum, cnt] = [0, 0]
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      sum += node.val
      cnt++
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    res.push(sum / cnt)
  }
}
