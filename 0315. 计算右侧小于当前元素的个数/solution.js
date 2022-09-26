/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 使用 index 排序保留信息
// TODO: 循环不变原则的 +j +j - mid - 1 以及大到小排序的写法
var countSmaller = function (nums) {
  const res = new Array(nums.length).fill(0)
  const indexes = nums.map((_, index) => index)
  const mergeSort = (indexes) => {
    // base case
    if (indexes.length === 1) return indexes
    const mid = (indexes.length - 1) >> 1
    const left = mergeSort(indexes.slice(0, mid + 1))
    const right = mergeSort(indexes.slice(mid + 1))
    return merge(left, right)
  }
  const merge = (left, right) => {
    let arr = []
    const len1 = left.length
    const len2 = right.length
    const len = len1 + len2
    for (let i = 0, j = 0, k = 0; k < len; k++) {
      if (i === len1) {
        arr[k] = right[j++]
      } else if (j === len2) {
        arr[k] = left[i++]
        res[arr[k]] += j
      } else if (nums[left[i]] > nums[right[j]]) {
        arr[k] = right[j++]
      } else {
        arr[k] = left[i++]
        res[arr[k]] += j
      }
    }
    return arr
  }
  mergeSort(indexes)
  return res
}

// TLE
var countSmaller = function (nums) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    const numI = nums[i]
    let cnt = 0
    for (let j = i + 1; j < nums.length; j++) {
      const numJ = nums[j]
      if (numJ < numI) cnt++
    }
    res.push(cnt)
  }
  return res
}
