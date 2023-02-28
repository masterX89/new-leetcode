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
  let res = ''
  const SEP = ','
  const NULL = 'null'
  const serializeHelper = (node) => {
    if (node === null) {
      res += NULL + SEP
      return
    }
    res += node.val + SEP
    serializeHelper(node.left)
    serializeHelper(node.right)
  }
  serializeHelper(root)
  return res.slice(0, res.length - 1)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const nodeArray = data.split(',')
  const NULL = 'null'
  const deserializeHelper = () => {
    const val = nodeArray.shift()
    if (val === NULL) return null
    const node = new TreeNode(Number(val))
    node.left = deserializeHelper(nodeArray)
    node.right = deserializeHelper(nodeArray)
    return node
  }
  return deserializeHelper(nodeArray)
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
