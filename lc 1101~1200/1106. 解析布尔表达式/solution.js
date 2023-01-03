/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  let st = []
  for (const ch of expression) {
    if (ch === ',') continue
    if (ch !== ')') {
      st.push(ch)
    } else {
      let f = (t = 0)
      while (st[st.length - 1] !== '(') {
        const c = st.pop()
        f += c === 'f' ? 1 : 0
        t += c === 't' ? 1 : 0
      }
      st.pop()
      const op = st.pop()
      if (op === '!') {
        st.push(t === 1 ? 'f' : 't')
      } else if (op === '&') {
        st.push(f > 0 ? 'f' : 't')
      } else if (op === '|') {
        st.push(t > 0 ? 't' : 'f')
      }
    }
  }
  const res = st.pop()
  return res === 't'
}
