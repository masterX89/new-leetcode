/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (root === null) return null
  const inOrder = (node) => {
    if (node === null) return
    inOrder(node.left)
    if (last === null) first = node
    else {
      last.right = node
      node.left = last
    }
    last = node
    inOrder(node.right)
  }
  let first = null
  let last = null
  inOrder(root)
  last.right = first
  first.left = last
  return first
}
