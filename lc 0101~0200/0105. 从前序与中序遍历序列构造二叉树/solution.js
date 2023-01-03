/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const valToIndex = new Map()
  inorder.forEach((value, index) => {
    valToIndex.set(value, index)
  })
  // [preStart,preEnd)
  const build = (preOrder, preStart, preEnd, inOrder, inStart, inEnd) => {
    // base case
    if (preStart === preEnd) return null
    const index = valToIndex.get(preOrder[preStart])
    const len = index - inStart
    const root = new TreeNode(preOrder[preStart])
    root.left = build(
      preOrder,
      preStart + 1,
      preStart + len + 1,
      inOrder,
      inStart,
      index
    )
    root.right = build(
      preOrder,
      preStart + len + 1,
      preEnd,
      inOrder,
      index + 1,
      inEnd
    )
    return root
  }
  return build(preorder, 0, preorder.length, inorder, 0, inorder.length)
}
