/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const inOrder = (node, arr) => {
  if (!node) return
  inOrder(node.left, arr)
  arr.push(node)
  inOrder(node.right, arr)
}
const findXY = (arr) => {
  let x = null
  let y = null
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].val > arr[i + 1].val) {
      if (!x) {
        x = arr[i]
      }
      y = arr[i + 1]
    }
  }
  return [x, y]
}
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let inOrderArray = []
  inOrder(root, inOrderArray)
  let [x, y] = findXY(inOrderArray)
  ;[x.val, y.val] = [y.val, x.val]
}
