/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = []
  if (!root) return res
  let q = [root]
  while (q.length) {
    const len = q.length
    res.push([])
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      res[res.length - 1].push(node.val)
      node.children &&
        node.children.forEach((child) => {
          q.push(child)
        })
    }
  }
  return res
}
