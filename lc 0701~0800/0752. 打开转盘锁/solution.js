/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const visited = new Set(deadends)
  let step = 0
  const q = []

  const changePwd = (pwd, pos, offset) => {
    const arr = pwd.split('').map((val) => parseInt(val))
    arr[pos] = (arr[pos] + offset + 10) % 10
    return arr.join('')
  }
  const pushQueue = (pwd) => {
    if (!visited.has(pwd)) {
      q.push(pwd)
      visited.add(pwd)
    }
  }

  pushQueue('0000')
  while (q.length !== 0) {
    const len = q.length
    for (let i = 0; i < len; i++) {
      const pwd = q.shift()
      if (pwd === target) return step
      for (let j = 0; j < 4; j++) {
        for (let offset of [-1, 1]) {
          const newPwd = changePwd(pwd, j, offset)
          pushQueue(newPwd)
        }
      }
    }
    step++
  }
  return -1
}
