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

const root = new TreeNode(1, new TreeNode(3, null, new TreeNode(2)), null)
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  // 迭代
  let st = [root]
  let x
  let y
  let prevNode
  while (st.length) {
    let node = st.pop()
    if (node instanceof TreeNode) {
      node.right && st.push(node.right)
      st.push([node])
      node.left && st.push(node.left)
    } else {
      // node is array
      // [node]
      if (prevNode !== undefined && node[0].val <= prevNode.val) {
        if (!x) x = prevNode
        y = node[0]
      }
      prevNode = node[0]
    }
  }
  ;[x.val, y.val] = [y.val, x.val]
}

recoverTree(root)
