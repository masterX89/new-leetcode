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
  const backtrack = (node, track, sum) => {
    if (node === null) return
    track.push(node.val)
    sum += node.val
    if (node.left === null && node.right === null && sum === target) {
      res.push(track.slice())
    }
    backtrack(node.left, track, sum)
    backtrack(node.right, track, sum)
    track.pop()
    sum -= node.val
  }
  backtrack(root, [], 0)
  return res
}
