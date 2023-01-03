/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return null
  let q = [root]
  while (q.length !== 0) {
    const len = q.length
    let prev = null
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      if (prev !== null) prev.next = node
      prev = node
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
  }
  return root
}
