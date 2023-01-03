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
 * @return {number[]}
 */
// 遍历 + Hash
var findMode = function (root) {
  let res = []
  let max = -1
  const frequency = {}
  function prevTraversal(node) {
    if (!node) return
    if (frequency[node.val]) frequency[node.val]++
    else frequency[node.val] = 1
    max = Math.max(max, frequency[node.val])
    node.left && prevTraversal(node.left)
    node.right && prevTraversal(node.right)
  }
  prevTraversal(root)
  for (const key in frequency) {
    if (frequency[key] === max) res.push(key)
  }
  return res
}

// 中序遍历 + 数组
var findMode = function (root) {
  let res = []
  let arr = []
  function inTraversal(node) {
    if (!node) return
    node.left && inTraversal(node.left)
    arr.push(node.val)
    node.right && inTraversal(node.right)
  }
  inTraversal(root)
  let [base, count, maxCount] = [0, 0, 0]
  for (const val of arr) {
    if (val === base) {
      count++
    } else {
      base = val
      count = 1
    }
    if (count === maxCount) res.push(base)
    if (count > maxCount) {
      maxCount = count
      res = [base]
    }
  }
  return res
}

// 中序 + 空间 O(1)
var findMode = function (root) {
  let [base, count, maxCount] = [0, 0, 0]
  let res = []
  function inTraversal(node) {
    if (!node) return
    node.left && inTraversal(node.left)
    if (node.val === base) {
      count++
    } else {
      base = node.val
      count = 1
    }
    if (count === maxCount) res.push(base)
    if (count > maxCount) {
      maxCount = count
      res = [base]
    }
    node.right && inTraversal(node.right)
  }
  inTraversal(root)
  return res
}
