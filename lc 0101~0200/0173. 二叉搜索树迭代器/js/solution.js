/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 比较不擅长的和 LRU 相类似的设计类型题目
// case 是使用 new 一个对象
// 因此可以使用 this.inOrderArray 来保存中序遍历结果

/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.index = 0
  this.inOrderArray = []
  this.inOrder(root, this.inOrderArray)
  this.length = this.inOrderArray.length
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  // 题目假设 index 不会超出 length
  if (this.index < this.length) {
    return this.inOrderArray[this.index++].val
  }
}

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.index < this.length
}

// 生成 inOrderArray 的方法也挂到原型上
BSTIterator.prototype.inOrder = function (node, res) {
  if (!node) return
  this.inOrder(node.left, res)
  res.push(node)
  this.inOrder(node.right, res)
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
