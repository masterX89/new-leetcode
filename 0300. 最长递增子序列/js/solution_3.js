// 贪心+二分
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0

  let n = nums.length
  let d = new Array(n + 1).fill(0)
  let len = 1
  d[len] = nums[0]
  for (let i = 1; i < n; i++) {
    if (d[len] < nums[i]) {
      d[++len] = nums[i]
    } else {
      let l = 1
      let r = len
      let j = 1
      while (l <= r) {
        let mid = ((r - l) >> 1) + l
        if (d[mid] < nums[i]) {
          // 二分开区间
          j = mid + 1
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
      d[j] = nums[i]
    }
  }
  return len
}

// 类vue3 的 LIS 解法
// [0, 8, 4, 12, 2]
// 由于我们 d 序列很可能不需要那么长
// 因此无需开始就开满
// 同时我们 d 序列记录了 index 而不是值
// var lengthOfLIS = function (nums) {
//   if (!nums.length) return 0
//   let path = nums.slice()
//   // index
//   let d = [0]
//   for (let i = 1; i < nums.length; i++) {
//     // 在 vue3 中此处需要加入判断 nums[i] === 0
//     // 表示
//     if (nums[d[d.length - 1]] < nums[i]) {
//       // 构造路径
//       path[i] = d[d.length - 1]
//       d.push(i)
//     } else {
//       // 二分
//       let l = 0
//       let r = d.length - 1
//       let j = 0
//       while (l <= r) {
//         let mid = (l + r) >> 1
//         if (nums[d[mid]] < nums[i]) {
//           j = mid + 1
//           l = mid + 1
//         } else {
//           r = mid - 1
//         }
//       }
//       // 构造路径判断 j - 1
//       if (j > 0) {
//         path[i] = d[j - 1]
//       }
//       d[j] = i
//     }
//   }
//   // 追溯路径
//   let prev = d[d.length - 1]
//   for (let i = d.length - 1; i >= 0; i--) {
//     d[i] = prev
//     prev = path[prev]
//   }

//   // [0,4,3] -> path -> [0,2,3]
//   // console.log(d)
//   return d.length
// }
// // [10,9,2,5,3,7,101,18] -> LIS: [2,3,7,18] -> [2,4,5,7] -> [2,4,5,7]
// // [0,8,4,12,2] -> [0,4,12] -> [2,4,3] -> [0,2,3]
// // [0,1,0,3,2,3] -> [0,1,2,3] -> [2,1,4,5] ->[0,1,4,5]
// // [7,7,7,7,7,7,7] -> [7] -> [6]
// const res = lengthOfLIS([0, 1, 0, 3, 2, 3])
// console.log(res)
