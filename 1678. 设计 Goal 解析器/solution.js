/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let st = []
  for (const ch of command) {
    if (ch !== ')') {
      st.push(ch)
    } else {
      if (st[st.length - 1] === '(') {
        st.pop() // pop (
        st.push('o')
      } else {
        while (st[st.length - 1] !== '(') {
          st.pop()
        }
        st.pop()
        st.push('al')
      }
    }
  }
  return st.join('')
}
