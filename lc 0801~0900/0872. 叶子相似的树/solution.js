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

// 同步遍历
// https://leetcode.cn/problems/leaf-similar-trees/solutions/767237/xiao-ming-zhao-bu-tong-tong-bu-bian-li-b-0te2/
var leafSimilar = function (root1, root2) {
  const findStart = (node, st) => {
    while (node.left !== null || node.right !== null) {
      if (node.left !== null) {
        // 记录下一个起点
        node.right && st.push(node.right)
        node = node.left
      } else {
        node = node.right
      }
    }
    return node
  }
  let st1 = []
  let st2 = []
  root1 && st1.push(root1)
  root2 && st2.push(root2)
  while (st1.length !== 0 && st2.length !== 0) {
    // node1 node2 最终会指向叶子
    let node1 = st1.pop()
    let node2 = st2.pop()
    node1 = findStart(node1, st1)
    node2 = findStart(node2, st2)
    if (node1.val !== node2.val) return false
  }
  // 退出 while 时候两者均为空以及一者不为空
  return st1.length === 0 && st2.length === 0
}
