/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 递归 一次遍历
var maxDepth = function (root) {
  let res = 0
  const traverse = (node, depth) => {
    if (node === null) return
    if (node.left === null && node.right === null) res = Math.max(res, depth)
    traverse(node.left, depth + 1)
    traverse(node.right, depth + 1)
  }
  traverse(root, 1)
  return res
}

// 递归 分解问题
var maxDepth = function (root) {
  if (root === null) return 0
  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)
  return Math.max(leftDepth, rightDepth) + 1
}

// 迭代 层次遍历
var maxDepth = function (root) {
  let res = 0
  if (root === null) return res
  let q = [root]
  while (q.length !== 0) {
    const len = q.length
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    res++
  }
  return res
}

// TODO: 迭代 外部栈可以优化
var maxDepth = function (root) {
  let res = 0
  if (!root) return res
  let st = [[root, 1]]
  while (st.length) {
    // [TreeNode,depth]
    const tuple = st.pop()
    const node = tuple[0]
    if (node instanceof TreeNode) {
      node.right && st.push([node.right, tuple[1] + 1])
      node.left && st.push([node.left, tuple[1] + 1])
      st.push([[node], tuple[1]])
    } else if (tuple[1] > res) {
      res = tuple[1]
    }
  }
  return res
}
