/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  const states = [
    { ' ': 0, s: 1, d: 2, '.': 4 }, // 0. start with 'blank'
    { d: 2, '.': 4 }, // 1. 'sign' before 'e'
    { d: 2, '.': 3, e: 5, ' ': 8 }, // 2. 'digit' before 'dot'
    { d: 3, e: 5, ' ': 8 }, // 3. 'digit' after 'dot'
    { d: 3 }, // 4. 'digit' after 'dot' (‘blank’ before 'dot')
    { s: 6, d: 7 }, // 5. 'e'
    { d: 7 }, // 6. 'sign' after 'e'
    { d: 7, ' ': 8 }, // 7. 'digit' after 'e'
    { ' ': 8 }, // 8. end with 'blank'
  ]
  let p = 0
  let t = ''
  for (const ch of s) {
    if ('0' <= ch && ch <= '9') t = 'd'
    else if ('+-'.includes(ch)) t = 's'
    else if ('eE'.includes(ch)) t = 'e'
    else if ('. '.includes(ch)) t = ch
    else t = '?'
    if (states[p][t] === undefined) return false
    p = states[p][t]
  }
  return p === 2 || p === 3 || p === 7 || p === 8
}
