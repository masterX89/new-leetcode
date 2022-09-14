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
// TODO: 优化写法 考虑 preStart + 1 越界问题 和 递归参数问题
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  const valToIndex = new Map()
  postorder.forEach((val, ind) => {
    valToIndex.set(val, ind)
  })
  const build = (preorder, preStart, preEnd, postorder, postStart, postEnd) => {
    // base case
    if (preStart === preEnd) return null
    if (preStart + 1 === preorder.length)
      return new TreeNode(preorder[preStart])
    const index = valToIndex.get(preorder[preStart + 1])
    const offset = index - postStart
    const root = new TreeNode(preorder[preStart])
    root.left = build(
      preorder,
      preStart + 1,
      preStart + 1 + offset + 1 > preEnd ? preEnd : preStart + 1 + offset + 1,
      postorder,
      postStart,
      index + 1 > postEnd ? postEnd : index + 1
    )
    root.right = build(
      preorder,
      preStart + 1 + offset + 1 > preEnd ? preEnd : preStart + 1 + offset + 1,
      preEnd,
      postorder,
      index + 1 > postEnd ? postEnd : index + 1,
      postEnd - 1
    )
    return root
  }
  return build(preorder, 0, preorder.length, postorder, 0, postorder.length)
}

constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1])
