/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let res = 0
  const leftMax = new Array(height.length).fill(0)
  leftMax[0] = height[0]
  const rightMax = new Array(height.length).fill(0)
  rightMax[height.length - 1] = height[height.length - 1]
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
  }
  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i])
  }
  for (let i = 0; i < height.length; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i]
  }
  return res
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
