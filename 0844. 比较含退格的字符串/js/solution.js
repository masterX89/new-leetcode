/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 快慢指针 构造 string
var backspaceCompare = function (s, t) {
  function build(str) {
    const arr = str.split('')
    let slow = 0
    for (let fast = 0; fast < arr.length; fast++) {
      if (arr[fast] !== '#') arr[slow++] = arr[fast]
      else if (slow > 0) slow--
    }
    return arr.slice(0, slow).join('')
  }
  return build(s) === build(t)
}

// stack 构造 string
var backspaceCompare = function (s, t) {
  function build(str) {
    const res = []
    for (const c of str) {
      if (c === '#') {
        res.pop()
      } else {
        res.push(c)
      }
    }
    return res.join('')
  }
  return build(s) === build(t)
}
