class MaxQueue {
  private queue: number[] = []
  private maxQueue: number[] = []

  constructor() { }

  max_value(): number {
    if (this.maxQueue.length === 0) return -1
    return this.maxQueue[0]
  }

  push_back(value: number): void {
    this.queue.push(value)
    while (this.maxQueue.length > 0 && value > this.maxQueue[this.maxQueue.length - 1]) this.maxQueue.pop()
    this.maxQueue.push(value)
  }

  pop_front(): number {
    if (this.queue.length === 0) return -1
    const val = this.queue.shift() as number
    if (val === this.maxQueue[0]) this.maxQueue.shift()
    return val
  }
}

/**
* Your MaxQueue object will be instantiated and called as such:
* var obj = new MaxQueue()
* var param_1 = obj.max_value()
* obj.push_back(value)
* var param_3 = obj.pop_front()
*/