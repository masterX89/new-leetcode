/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let st = []
  let res = new Array(temperatures.length).fill(0)
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      st.length !== 0 &&
      temperatures[st[st.length - 1]] <= temperatures[i]
    ) {
      st.pop()
    }
    res[i] = st.length === 0 ? 0 : st[st.length - 1] - i
    st.push(i)
  }
  return res
}
