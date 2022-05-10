/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const buildings = [
  [2, 9, 10],
  [3, 7, 15],
  [5, 12, 12],
  [15, 20, 10],
  [19, 24, 8],
]
var getSkyline = function (buildings) {
  let res = []
  const edges = []
  for (const building of buildings) {
    edges.push([building[0], -building[2]])
    edges.push([building[1], building[2]])
  }
  edges.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0]
    } else {
      // x 相等时 两栋大楼相邻
      // 入边 应该排在 出边 前
      // 否则会多记录一个 [0, height] 的点
      return a[1] - b[1]
    }
  })
  const heights = [0] // 0 是地平线
  let prevMax = -1
  for (const edge of edges) {
    if (edge[1] < 0) {
      heights.push(-edge[1])
    } else {
      const i = heights.indexOf(edge[1])
      if (i !== -1) {
        heights.splice(i, 1)
      }
    }
    const maxHeight = Math.max(...heights)
    if (prevMax !== maxHeight) {
      res.push([edge[0], maxHeight])
      prevMax = maxHeight
    }
  }
  return res
}

console.log(getSkyline(buildings))
