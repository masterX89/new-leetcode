/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const map = new Map()
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i + 1)
  }
  const res = s
    .split('')
    .sort((c1, c2) => {
      return (map.get(c1) || 0) - (map.get(c2) || 0)
    })
    .join('')
  return res
}
