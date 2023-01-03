/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size
  this.queue = []
  this.sum = 0
}

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  const { size, queue, sum } = this
  if (queue.length >= size) {
    const num = queue.shift()
    sum -= num
  }
  queue.push(val)
  sum += val
  return sum / queue.length
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
