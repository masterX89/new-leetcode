/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function (towers, radius) {
  const inSign = (tower, x, y) => {
    return (x - tower[0]) ** 2 + (y - tower[1]) ** 2 <= radius ** 2
  }
  let res = []
  let maxQuality = 0
  let [maxX, maxY] = [0, 0]
  for (const tower of towers) {
    maxX = Math.max(maxX, tower[0])
    maxY = Math.max(maxY, tower[1])
  }
  for (let x = maxX; x >= 0; x--) {
    for (let y = maxY; y >= 0; y--) {
      let quality = 0
      for (const tower of towers) {
        if (inSign(tower, x, y)) {
          quality += parseInt(
            tower[2] /
              (1 + Math.sqrt((x - tower[0]) ** 2 + (y - tower[1]) ** 2))
          )
        }
      }
      if (quality >= maxQuality) {
        maxQuality = quality
        res[0] = x
        res[1] = y
      }
    }
  }
  return res
}
