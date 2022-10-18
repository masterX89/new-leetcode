/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
// TODO: 可以优化
var openLock = function (deadends, target) {
  const ends = new Set(deadends)
  const visited = new Set()
  if (ends.has('0000')) return -1
  const addOne = (str, j) => {
    const arr = str.split('').map((val) => parseInt(val))
    if (arr[j] === 9) arr[j] = 0
    else arr[j] += 1
    return arr.join('')
  }
  const MinusOne = (str, j) => {
    const arr = str.split('').map((val) => parseInt(val))
    if (arr[j] === 0) arr[j] = 9
    else arr[j] -= 1
    return arr.join('')
  }
  let step = 0
  const q = ['0000']
  while (q.length !== 0) {
    const len = q.length
    for (let i = 0; i < len; i++) {
      const pwd = q.shift()
      if (pwd === target) return step
      for (let j = 0; j < 4; j++) {
        const pwdAdd = addOne(pwd, j)
        if (!ends.has(pwdAdd) && !visited.has(pwdAdd)) {
          q.push(pwdAdd)
          visited.add(pwdAdd)
        }
        const pwdMinus = MinusOne(pwd, j)
        if (!ends.has(pwdMinus) && !visited.has(pwdMinus)) {
          q.push(pwdMinus)
          visited.add(pwdMinus)
        }
      }
    }
    step++
  }
  return -1
}
