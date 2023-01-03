/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
  let res = []
  s = s.slice(1, -1)

  const dotPos = (s) => {
    let nums = []
    // 0 or integer
    if (s[0] !== '0' || s === '0') nums.push(s)
    // float
    for (let p = 1; p < s.length; p++) {
      // prefix zero or suffix zero
      if ((p !== 1 && s[0] === '0') || s[s.length - 1] === '0') continue
      nums.push(`${s.slice(0, p)}.${s.slice(p)}`)
    }
    return nums
  }
  for (let i = 1; i < s.length; i++) {
    const xNums = dotPos(s.slice(0, i))
    const yNums = dotPos(s.slice(i))
    for (const xNum of xNums) {
      for (const yNum of yNums) {
        res.push(`(${xNum}, ${yNum})`)
      }
    }
  }
  return res
}
