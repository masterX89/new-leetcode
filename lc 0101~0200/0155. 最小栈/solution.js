var MinStack = function () {
  this.st = []
  this.minSt = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.st.push(val)
  if (this.minSt.length === 0 || val <= this.minSt[this.minSt.length - 1]) {
    this.minSt.push(val)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const val = this.st.pop()
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
MinStack.prototype.getMin = function () {
  return this.minSt[this.minSt.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
