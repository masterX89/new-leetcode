let res = []
const mergeSort = (indexes, lo, hi, nums) => {
  if (lo === hi) return indexes
  const mid = lo + ((hi - lo) >> 1)
  mergeSort(indexes, lo, mid, nums)
  mergeSort(indexes, mid + 1, hi, nums)
  const sorted = new Array(hi - lo + 1)
  for (let i = lo, j = mid + 1, k = 0; k < sorted.length; k++) {
    if (i === mid + 1) {
      sorted[k] = indexes[j++]
    } else if (j === hi + 1) {
      sorted[k] = indexes[i++]
      res[sorted[k]] += j - (mid + 1)
    } else if (nums[indexes[i]] > nums[indexes[j]]) {
      sorted[k] = indexes[j++]
    } else {
      sorted[k] = indexes[i++]
      res[sorted[k]] += j - (mid + 1)
    }
  }
  for (let i = 0; i < sorted.length; i++) {
    indexes[lo + i] = sorted[i]
  }
  return indexes
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  res = new Array(nums.length).fill(0)
  const indexes = nums.map((_, index) => index)
  mergeSort(indexes, 0, indexes.length - 1, nums)
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
