/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
  const belowTwo = (word1, word2) => {
    let cnt = 0
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) cnt++
      if (cnt > 2) return false
    }
    return true
  }
  let res = []
  for (const query of queries) {
    for (const dict of dictionary) {
      if (belowTwo(query, dict)) {
        res.push(query)
        break
      }
    }
  }
  return res
}
