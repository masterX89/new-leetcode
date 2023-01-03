/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

const cpdomains = [
  '900 google.mail.com',
  '50 yahoo.com',
  '1 intel.mail.com',
  '5 wiki.org',
]

var subdomainVisits = function (cpdomains) {
  let res = []
  // domain -> count
  let map = {}
  cpdomains.forEach((item) => {
    // "900 google.mail.com"
    const strArr = item.split(' ')
    const count = Number(strArr[0]) // 9001
    let domains = strArr[1] // google.mail.com
    let key = domains
    while (domains.length) {
      if (Object.hasOwnProperty.call(map, key)) {
        map[key] += count
      } else {
        map[key] = count
      }
      const i = domains.indexOf('.')
      if (i !== -1) {
        domains = domains.slice(i + 1)
      } else {
        domains = domains.slice(domains.length)
      }
      key = domains
    }
  })
  for (const key in map) {
    res.push(`${map[key]} ${key}`)
  }
  return res
}

const res = subdomainVisits(cpdomains)
console.log(res)
