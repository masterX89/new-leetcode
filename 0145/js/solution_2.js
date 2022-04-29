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
// 迭代写法还是偏向于 common 因此使用双 stack
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let res = []
  if (!root) return res
  // 左 右 中(top)
  let st1 = [root]
  // 中 右 左(top)
  let st2 = []
  while (st1.length) {
    let node = st1.pop()
    if (node) {
      st2.push(node)
      st1.push(node.left)
      st1.push(node.right)
    }
  }
  while (st2.length) {
    let node = st2.pop()
    res.push(node.val)
  }
  return res
}
