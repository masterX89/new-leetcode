/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
  let res = 0
  const removeDuplicates = (s) => {
    let str = ''
    let cnt = []
    let i = 0
    while (i < s.length) {
      const ch = s[i]
      str += ch
      let tot = 0
      while (i < s.length && s[i] === ch) {
        tot++
        i++
      }
      cnt.push(tot)
    }
    return {
      str,
      cnt,
    }
  }
  const { str: standardS, cnt: standardCnt } = removeDuplicates(s)
  for (const word of words) {
    const { str, cnt } = removeDuplicates(word)
    if (str === standardS) {
      let i = 0
      for (i = 0; i < cnt.length; i++) {
        if (
          cnt[i] > standardCnt[i] ||
          (cnt[i] < standardCnt[i] && standardCnt[i] < 3)
        )
          break
      }
      if (i === cnt.length) res++
    }
  }
  return res
}
