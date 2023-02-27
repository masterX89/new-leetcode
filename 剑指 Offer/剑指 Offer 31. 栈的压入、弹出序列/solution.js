/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let st = []
  for (let i = 0, j = 0; i < pushed.length; i++) {
    st.push(pushed[i])
    while (st.length > 0 && st[st.length - 1] === popped[j]) {
      st.pop()
      j++
    }
  }
  return st.length === 0
}
