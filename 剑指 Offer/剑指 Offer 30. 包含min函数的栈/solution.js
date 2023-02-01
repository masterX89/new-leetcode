/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.st = []
  this.minSt = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.st.push(x)
  if (this.minSt.length === 0 || x <= this.minSt[this.minSt.length - 1]) {
    this.minSt.push(x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const val = this.st.pop()
  // update
  if (val === this.minSt[this.minSt.length - 1]) {
    this.minSt.pop()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.st[this.st.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.minSt[this.minSt.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
