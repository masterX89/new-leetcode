/**
 * @param {number} year
 * @param {number} month
 * @return {number}
 */
var numberOfDays = function (year, month) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (month === 2) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) return 29
  }
  return days[month - 1]
}
