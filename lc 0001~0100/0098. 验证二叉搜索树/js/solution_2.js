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

// const root = new TreeNode(
//   5,
//   new TreeNode(1, null, null),
//   new TreeNode(4, new TreeNode(3), new TreeNode(6))
// )
const root = new TreeNode(0, null, new TreeNode(-1))

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return false
  let prevVal = null
  let st = [root]
  while (st.length) {
    let node = st.pop()
    if (node instanceof TreeNode) {
      node.right && st.push(node.right)
      st.push(node.val)
      node.left && st.push(node.left)
    } else {
      // 颜色标记法下 prevVal 和 node 均为 Number
      // 注意 0 的判断 应该使用 !== null
      if (prevVal !== null && node <= prevVal) return false
      prevVal = node
    }
  }
  return true
}

console.log(isValidBST(root))
