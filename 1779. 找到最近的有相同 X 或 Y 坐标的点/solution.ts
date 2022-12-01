function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let res = -1
  let min = Infinity
  let minPoint = [Infinity, Infinity]
  for (let i = 0; i < points.length; i++) {
    const point = points[i]
    if (point[0] !== x && point[1] !== y) continue
    if (Math.abs(x - point[0]) + Math.abs(y - point[1]) < min) {
      minPoint = [point[0], point[1]]
      res = i
      min = Math.abs(x - point[0]) + Math.abs(y - point[1])
    }
  }
  return res
}