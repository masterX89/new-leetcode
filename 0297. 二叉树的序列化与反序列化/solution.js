/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function (root) {
  let str = ''
  const NULL = 'null'
  const SEP = ','
  const rserialiaze = (root) => {
    if (root === null) {
      str += NULL + SEP
      return
    }
    str += root.val + SEP
    rserialiaze(root.left)
    rserialiaze(root.right)
  }
  rserialiaze(root)
  return str.slice(0, str.length - 1)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const rdeserialize = (arr) => {
    if (arr.length === 0) return null

    let root = null
    const val = arr.shift()
    if (val === 'null') return null

    root = new TreeNode(val)
    root.left = rdeserialize(arr)
    root.right = rdeserialize(arr)
    return root
  }
  const arr = data.split(',')
  return rdeserialize(arr)
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
