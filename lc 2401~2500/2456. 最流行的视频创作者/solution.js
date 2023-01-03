/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function (creators, ids, views) {
  const creatorToFreq = new Map()
  const creatorToMaxVedio = new Map()
  for (let i = 0; i < creators.length; i++) {
    const freq = creatorToFreq.get(creators[i]) || 0
    creatorToFreq.set(creators[i], freq + views[i])
    let maxVedio = creatorToMaxVedio.get(creators[i]) || [ids[i], views[i]]
    if (
      views[i] > maxVedio[1] ||
      (views[i] === maxVedio[1] && ids[i] < maxVedio[0])
    ) {
      maxVedio = [ids[i], views[i]]
    }
    creatorToMaxVedio.set(creators[i], maxVedio)
  }
  const maxFreq = Math.max(...creatorToFreq.values())
  let res = []
  creatorToFreq.forEach((freq, creator) => {
    if (freq === maxFreq) {
      const maxId = creatorToMaxVedio.get(creator)[0]
      res.push([creator, maxId])
    }
  })
  return res
}
