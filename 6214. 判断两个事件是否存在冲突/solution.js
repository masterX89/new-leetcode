/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
  if (
    parseInt(event1[0].split(':')[0]) > parseInt(event2[0].split(':')[0]) ||
    (parseInt(event1[0].split(':')[0]) === parseInt(event2[0].split(':')[0]) &&
      parseInt(event1[0].split(':')[1]) > parseInt(event2[0].split(':')[1]))
  ) {
    let temp = event2
    event2 = event1
    event1 = temp
  }
  if (
    parseInt(event1[1].split(':')[0]) > parseInt(event2[0].split(':')[0]) ||
    (parseInt(event1[1].split(':')[0]) === parseInt(event2[0].split(':')[0]) &&
      parseInt(event1[1].split(':')[1]) >= parseInt(event2[0].split(':')[1]))
  ) {
    return true
  }
  return false
}

haveConflict(['01:15', '02:00'], ['02:00', '03:00'])
