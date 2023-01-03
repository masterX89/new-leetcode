/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const valToIndex = new Map()
  inorder.forEach((val, ind) => {
    valToIndex.set(val, ind)
  })
  const build = (inorder, inStart, inEnd, postorder, postStart, postEnd) => {
    // base case
    if (inStart === inEnd) return null
    const index = valToIndex.get(postorder[postEnd - 1])
    const len = index - inStart
    const root = new TreeNode(postorder[postEnd - 1])
    root.left = build(
      inorder,
      inStart,
      index,
      postorder,
      postStart,
      postStart + len
    )
    root.right = build(
      inorder,
      index + 1,
      inEnd,
      postorder,
      postStart + len,
      postEnd - 1
    )
    return root
  }
  return build(inorder, 0, inorder.length, postorder, 0, postorder.length)
}
