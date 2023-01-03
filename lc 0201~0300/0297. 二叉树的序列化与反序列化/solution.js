/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 前序 序列化反序列化
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

    const val = arr.shift()
    if (val === 'null') return null

    let root = new TreeNode(val)
    root.left = rdeserialize(arr)
    root.right = rdeserialize(arr)
    return root
  }
  const arr = data.split(',')
  return rdeserialize(arr)
}

// 后序 序列化反序列化
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const NULL = 'null'
  const SEP = ','
  let str = ''
  const postSerialize = (root) => {
    if (root === null) {
      str += NULL + SEP
      return
    }
    postSerialize(root.left)
    postSerialize(root.right)
    str += root.val + SEP
  }
  postSerialize(root)
  return str.slice(0, str.length - 1)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const arr = data.split(',')
  const postDeserialize = (arr) => {
    if (arr.length === 0) return null
    const val = arr.pop()
    if (val === 'null') return null
    const root = new TreeNode(val)
    root.right = postDeserialize(arr)
    root.left = postDeserialize(arr)
    return root
  }
  return postDeserialize(arr)
}

// TODO: 层次遍历 序列化反序列化
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
