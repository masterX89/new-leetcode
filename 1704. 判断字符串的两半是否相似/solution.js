/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let sum1 = (sum2 = 0)
  const stand = 'aeiouAEIOU'
  for (let i = 0; i < s.length; i++) {
    if (i < parseInt(s.length / 2)) {
      sum1 += stand.includes(s[i])
    } else {
      sum2 += stand.includes(s[i])
    }
  }
  return sum1 === sum2
}
