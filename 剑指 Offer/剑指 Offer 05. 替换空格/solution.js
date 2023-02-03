/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  return s.split(' ').join('%20')
}

var replaceSpace = function (s) {
  return s.replaceAll(' ', '%20')
}
