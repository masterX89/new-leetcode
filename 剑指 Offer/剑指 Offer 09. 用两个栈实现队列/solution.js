var CQueue = function () {
  this.st1 = []
  this.st2 = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.st1.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.st2.length > 0) {
    return this.st2.pop()
  } else if (this.st1.length > 0) {
    while (this.st1.length > 0) {
      const val = this.st1.pop()
      this.st2.push(val)
    }
    return this.st2.pop()
  }
  return -1
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
