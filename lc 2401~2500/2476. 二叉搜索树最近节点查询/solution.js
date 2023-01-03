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
 * @param {number[]} queries
 * @return {number[][]}
 */
var closestNodes = function (root, queries) {
  let res = []
  let nums = []
  const helper = (root) => {
    if (root === null) return
    helper(root.left)
    nums.push(root.val)
    helper(root.right)
  }
  helper(root)
  for (const query of queries) {
    let ans = []
    const n = nums.length
    let l = 0
    let r = n - 1
    while (l <= r) {
      let c = l + ((r - l) >> 1)
      if (nums[c] <= query) l = c + 1
      else if (nums[c] > query) r = c - 1
    }
    ans.push(r !== -1 ? nums[r] : -1)
    ;[l, r] = [0, n - 1]
    while (l <= r) {
      let c = l + ((r - l) >> 1)
      if (nums[c] >= query) r = c - 1
      else if (nums[c] < query) l = c + 1
    }
    ans.push(l !== n ? nums[l] : -1)
    res.push(ans)
  }
  return res
}
