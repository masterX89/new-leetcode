/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  const build = (start, end) => {
    let list = []
    // base case
    if (start > end) return [null]
    for (let i = start; i <= end; i++) {
      // const root = new TreeNode(i) 是同一个对象
      // 下面的左右子树不断生成会导致结果一样
      const leftSubTrees = build(start, i - 1)
      const rightSubTrees = build(i + 1, end)
      for (const left of leftSubTrees) {
        for (const right of rightSubTrees) {
          const root = new TreeNode(i)
          root.left = left
          root.right = right
          list.push(root)
        }
      }
    }
    return list
  }
  return build(1, n)
}

// 构建一棵二叉搜索树
var generateTrees = function (n) {
  let res = []
  const build = (start, end) => {
    // base case
    if (start > end) return null
    // root node
    const val = parseInt((start + end) / 2)
    const root = new TreeNode(val)
    root.left = build(start, val - 1)
    root.right = build(val + 1, end)
    return root
  }
  res.push(build(1, n))
  return res
}

// 构建不同根节点的二叉搜索树的中间思路
var generateTrees = function (n) {
  const build = (start, end) => {
    let list = []
    // base case
    if (start > end) return null
    // root node
    for (let i = start; i <= end; i++) {
      const root = new TreeNode(i)
      root.left = build(start, i - 1)
      root.right = build(i + 1, end)
      list.push(root)
    }
    return list
  }
  return build(1, n)
}
// ;[
//   {
//     val: 1,
//     left: null,
//     right: [
//       { val: 2, left: null, right: [{ val: 3, left: null, right: null }] },
//       { val: 3, left: [{ val: 2, left: null, right: null }], right: null },
//     ],
//   },
//   {
//     val: 2,
//     left: [{ val: 1, left: null, right: null }],
//     right: [{ val: 3, left: null, right: null }],
//   },
//   {
//     val: 3,
//     left: [
//       { val: 1, left: null, right: [{ val: 2, left: null, right: null }] },
//       { val: 2, left: [{ val: 1, left: null, right: null }], right: null },
//     ],
//     right: null,
//   },
// ]
