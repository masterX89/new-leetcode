/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const m = preorder.length
  const n = inorder.length
  const valToIndex = new Map()
  inorder.forEach((num, index) => valToIndex.set(num, index))
  const build = (preStart, preEnd, inStart, inEnd) => {
    if (preStart > preEnd || inStart > inEnd) return null
    const val = preorder[preStart]
    const root = new TreeNode(val)
    const index = valToIndex.get(val)
    const len = index - inStart
    root.left = build(preStart + 1, preStart + len, inStart, index - 1)
    root.right = build(preStart + len + 1, preEnd, index + 1, inEnd)
    return root
  }
  return build(0, m - 1, 0, n - 1)
}
