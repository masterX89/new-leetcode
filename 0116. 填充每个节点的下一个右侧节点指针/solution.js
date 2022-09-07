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
  const traversal = (node1, node2) => {
    if (node1 === null || node2 === null) return
    node1.next = node2
    traversal(node1.left, node1.right)
    traversal(node1.right, node2.left)
    traversal(node2.left, node2.right)
  }
  if (root === null) return null
  traversal(root.left, root.right)
  return root
}

// 迭代 层次
var connect = function (root) {
  if (root === null) return null
  let q = [root]
  while (q.length !== 0) {
    const len = q.length
    let p = q[0]
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      node.left && q.push(node.left)
      node.right && q.push(node.right)
      p.next = node
      p = p.next
    }
    p.next = null
  }
  return root
}
