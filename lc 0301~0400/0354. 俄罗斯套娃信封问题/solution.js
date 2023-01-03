/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  envelopes.sort((e1, e2) => {
    return e1[0] !== e2[0] ? e1[0] - e2[0] : e2[1] - e1[1]
  })
  const piles = []
  for (const envelope of envelopes) {
    const target = envelope[1]
    let l = 0
    let r = piles.length - 1
    while (l <= r) {
      const c = l + ((r - l) >> 1)
      const card = piles[c][piles[c].length - 1]
      if (card >= target) r = c - 1
      else l = c + 1
    }
    if (l === piles.length) piles.push([target])
    else piles[l].push(target)
  }
  return piles.length
}
