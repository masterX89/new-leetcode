const entry = {
  a: {
    b: {
      c: {
        dd: 'abcdd',
        e: 'abce',
      },
    },
    d: {
      ee: 'adee',
    },
    f: 'af',
  },
}
const output = {
  'a.b.c.dd': 'abcdd',
  'a.b.c.e': 'abce',
  'a.d.ee': 'adee',
  'a.f': 'af',
}

// TODO: 记得还有道经典题目是收归 val 作为 res 的 key，然后统计 raw 里的次数

const isObject = (obj) => obj !== null && typeof obj === 'object'

let res = {}
function dfs(obj, parentKey = '') {
  const keys = Object.keys(obj)
  if (!keys) return {}

  for (const key of keys) {
    let flattenKey = parentKey ? `${parentKey}.${key}` : key
    let val = obj[key]
    if (isObject(val)) {
      dfs(val, flattenKey)
    } else {
      res[flattenKey] = val
    }
  }
  return res
}

console.log(dfs(entry))
