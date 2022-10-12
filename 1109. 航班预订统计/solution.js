/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const nums = new Array(n).fill(0)

  const diff = new Array(n).fill(0)
  diff[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    diff[i] = nums[i] - nums[i - 1]
  }
  for (const booking of bookings) {
    const i = booking[0] - 1
    const j = booking[1] - 1
    const val = booking[2]
    diff[i] += val
    if (j + 1 < diff.length) diff[j + 1] -= val
  }

  const res = new Array(n).fill(0)
  res[0] = diff[0]
  for (let i = 1; i < diff.length; i++) {
    res[i] = res[i - 1] + diff[i]
  }
  return res
}
