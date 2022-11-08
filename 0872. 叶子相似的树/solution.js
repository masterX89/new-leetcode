/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let seq1 = []
  let seq2 = []
  const preOrder = (node, seq) => {
    if (node === null) return
    if (node.left === null && node.right === null) seq.push(node.val)
    preOrder(node.left, seq)
    preOrder(node.right, seq)
  }
  preOrder(root1, seq1)
  preOrder(root2, seq2)
  return seq1.join() === seq2.join()
}
