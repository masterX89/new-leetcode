var levelOrderBottom = function (root) {
  let res = []
  if (!root) return res
  let q = [root]
  while (q.length) {
    const len = q.length
    res.unshift([])
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      if (node) {
        res[0].push(node.val)
        node.left && q.push(node.left)
        node.right && q.push(node.right)
      }
    }
  }
  return res
}
