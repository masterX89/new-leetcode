/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
  const createDiff = (word) => {
    const diff = new Array(word.length).fill(0)
    for (let i = 1; i < word.length; i++) {
      diff[i] = word[i].charCodeAt() - word[i - 1].charCodeAt()
    }
    return diff
  }
  const isEqual = (diff1, diff2) => {
    for (let i = 0; i < diff1.length; i++) {
      if (diff1[i] !== diff2[i]) return false
    }
    return true
  }
  let stand = null
  if (isEqual(createDiff(words[0]), createDiff(words[1]))) {
    stand = words[0]
  } else if (isEqual(createDiff(words[0]), createDiff(words[2]))) {
    stand = words[0]
  } else if (isEqual(createDiff(words[1]), createDiff(words[2]))) {
    stand = words[1]
  }
  const standArr = createDiff(stand)
  for (const word of words) {
    if (!isEqual(createDiff(word), standArr)) return word
  }
}
