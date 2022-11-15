/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1])
  let res = 0
  for (let i = 0; i < boxTypes.length && truckSize > 0; i++) {
    if (truckSize < boxTypes[i][0]) {
      res += truckSize * boxTypes[i][1]
      truckSize = 0
    } else {
      res += boxTypes[i][0] * boxTypes[i][1]
      truckSize -= boxTypes[i][0]
    }
  }
  return res
}
