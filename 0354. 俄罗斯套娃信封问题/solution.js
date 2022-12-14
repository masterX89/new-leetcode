/**
 * @param {number[][]} envelopes
 * @return {number}
 */
// FIXME: TLE
var maxEnvelopes = function (envelopes) {
  envelopes.sort((e1, e2) => {
    return e1[0] !== e2[0] ? e1[0] - e2[0] : e2[1] - e1[1]
  })
  const dp = new Array(envelopes.length).fill(1)
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[j][1] >= envelopes[i][1]) continue
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
  return Math.max(...dp)
}
